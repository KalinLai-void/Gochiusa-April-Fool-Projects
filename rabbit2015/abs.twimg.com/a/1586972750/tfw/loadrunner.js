(function(context, document) {
  var useInteractive = context.attachEvent && !context.opera,
      scripts = document.getElementsByTagName('script'), uuid = 0,
      scriptTag, scriptTemplate = document.createElement('script'),
      scriptsInProgress = {}, modulesInProgress = {}, loadedModule,
      currentScript, activeScripts = {};

  for (var i=0, s; s = scripts[i]; i++) {
    if (s.src.match(/loadrunner\.js(\?|#|$)/)) {
      scriptTag = s;
      break;
    }
  }

  function makeArray(o) {
    return Array.prototype.slice.call(o);
  }

  var isArray = Array.isArray || function(obj) {
    return obj.constructor == Array;
  };

  function indexOf(arr, thing) {
    for (var i=0, item; item = arr[i]; i++) {
      if (thing == item) {
        return i;
      }
    }

    return -1;
  }

  function path() {
    var parts = makeArray(arguments), normalized = [];
    for (var i=0, len = parts.length; i < len; i++) {
      if (parts[i].length > 0) {
        normalized.push(parts[i].replace(/\/$/, ''));
      }
    }
    return normalized.join('/');
  }

  function Dependency() {}
  Dependency.prototype.then = function(cb) {
    if (!this.started) {
      this.started = true;
      this.start();
    }

    if (this.completed) {
      cb.apply(this, this.results);
    } else {
      this.callbacks = this.callbacks || [];
      this.callbacks.push(cb);
    }

    return this;
  };
  Dependency.prototype.start = function() {};
  Dependency.prototype.complete = function() {
    if (!this.completed) {
      this.results = makeArray(arguments);
      this.completed = true;

      if (this.callbacks) {
        for (var i=0, cb; cb = this.callbacks[i]; i++) {
          cb.apply(this, this.results);
        }
      }
    }
  };

  function Script(path, force) {
    this.id = this.path = path;
    this.force = !!force;
  }
  Script.loaded = [];
  Script.prototype = new Dependency;
  Script.prototype.start = function() {
    var me = this, dep;

    if (dep = scriptsInProgress[this.id]) {
      dep.then(function() {
        me.loaded();
      });
    } else if (!this.force && indexOf(Script.loaded, this.id) > -1) {
      this.loaded();
    } else {
      this.load();
    }

    return this;
  };
  Script.prototype.load = function() {
    var me = this;

    scriptsInProgress[this.id] = me;

    var script = scriptTemplate.cloneNode(false);

    this.scriptId = script.id = 'LR' + ++uuid;
    script.type = 'text/javascript';
    script.async = true;

    script.onerror = function() {
      throw new Error(me.path + ' not loaded');
    };

    script.onreadystatechange = script.onload = function (e) {
      e = context.event || e;

      if (e.type == 'load' || indexOf(['loaded', 'complete'], this.readyState) > -1) {
        this.onreadystatechange = null;
        me.loaded();
      }
    };

    script.src = this.path;

    currentScript = this;
    scripts[0].parentNode.insertBefore(script, scripts[0]);
    currentScript = null;

    activeScripts[script.id] = this;
  };
  Script.prototype.loaded = function() {
    this.complete();
  };
  Script.prototype.complete = function() {
    if (indexOf(Script.loaded, this.id) == -1) {
      Script.loaded.push(this.id);
    }

    delete scriptsInProgress[this.id];
    Dependency.prototype.complete.apply(this, arguments);
  };

  function Module(id, body) {
    this.id = id;
    this.body = body;

    if (typeof body == 'undefined') {
      this.path = this.resolvePath(id);
    }

  }
  Module.exports = {};
  Module.prototype = new Script;
  Module.prototype.resolvePath = function(id) {
    return path(using.path, id + '.js');
  };
  Module.prototype.start = function() {
    var exports, module, me = this, oldCurrent;
    if (this.body) {
      this.execute();
    } else if (exports = Module.exports[this.id]) {
      this.exp(exports);
    } else if (module = modulesInProgress[this.id]) {
      module.then(function(exports) {
        me.exp(exports);
      });
    } else {
      modulesInProgress[this.id] = this;
      this.load();
    }
  };
  Module.prototype.loaded = function() {
    var module, exports, me = this;

    if (!useInteractive) {
      module = loadedModule;
      loadedModule = null;
      module.id = module.id || this.id;

      module.then(function(exports) {
        me.exp(exports);
      });
    } else {
      if (exports = Module.exports[this.id]) {
        this.exp(exports);
      } else if (module = modulesInProgress[this.id]) {
        module.then(function(exports) {
          me.exp(exports);
        });
      }
    }
  };
  Module.prototype.complete = function() {
    delete modulesInProgress[this.id];
    Script.prototype.complete.apply(this, arguments);
  };
  Module.prototype.execute = function() {
    var me = this;
    if (typeof this.body == 'object') {
      this.exp(this.body);
    } else if (typeof this.body == 'function') {
      this.body(function(exports) {
        me.exp(exports);
      });
    }
  };
  Module.prototype.exp = function(exports) {
    this.complete(this.exports = Module.exports[this.id] = exports);
  };

  function Collection(deps) {
    this.deps = deps;
  }
  Collection.prototype = new Dependency;
  Collection.prototype.start = function() {
    var me = this;

    function depComplete() {
      var results = [];

      for (var i=0, d; d = me.deps[i]; i++) {
        if (!d.completed) { return; }
        if (d.results.length > 0) {
          results = results.concat(d.results);
        }
      }

      me.complete.apply(me, results);
    }

    for (var i=0, d; d = this.deps[i]; i++) {
      d.then(depComplete);
    }

    return this;
  };

  function Sequence(deps) {
    this.deps = deps;
  }
  Sequence.prototype = new Dependency;
  Sequence.prototype.start = function() {
    var me = this, nextDep = 0, allResults = [];

    (function next() {
      var dep = me.deps[nextDep++];
      if (dep) {
        dep.then(function(results) {
          if (dep.results.length > 0) {
            allResults.concat(dep.results);
          }
          next();
        });
      } else {
        me.complete(allResults);
      }
    }());

    return this;
  };

  function interactiveScript() {
    for (var i in scripts) {
      if (scripts[i].readyState == 'interactive') {
        return activeScripts[scripts[i].id];
      }
    }
  }

  function defineModule(name, body) {
    var module;

    if (!name && useInteractive) {
      module = currentScript || interactiveScript();
    }

    if (module) {
      delete activeScripts[module.scriptId];
      module.body = body;
      module.execute();
    } else {
      loadedModule = module = new Module(name, body);
      modulesInProgress[module.id] = module;
    }

    return module;
  }

  function provide() {
    var args = makeArray(arguments), name, body;

    if (typeof args[0] == 'string') {
      name = args.shift();
    }

    body = args.shift();

    return defineModule(name, body);
  }

  function amdResolve(id, mod) {
    var from = mod.id || '';
    var parts = from.split('/'); parts.pop();
    var dir = parts.join('/');
    return id.replace(/^\./, dir);
  }

  function amdMap(args, mod) {
    var mapped = [];

    function require(id) {
      return Module.exports[amdResolve(id, mod)];
    }

    for (var i=0, len = args.length; i < len; i++) {
      if (args[i] == 'require') {
        mapped.push(require);
        continue;
      }

      if (args[i] == 'exports') {
        mod.exports = mod.exports || {};
        mapped.push(mod.exports);
        continue;
      }

      mapped.push(require(args[i]));
    }
    return mapped;
  }

  function amdDefine() {
    var args = makeArray(arguments), dependencies = [], id, factory;

    if (typeof args[0] == 'string') {
      id = args.shift();
    }

    if (isArray(args[0])) {
      dependencies = args.shift();
    }

    factory = args.shift();

    return defineModule(id, function(exports) {
      var me = this, mods = [];

      function executeAMD() {
        var args = amdMap(makeArray(dependencies), me), exported;

        if (typeof factory == 'function') {
          exported = factory.apply(me, args);
        } else {
          exported = factory;
        }

        if (typeof exported == 'undefined') {
          exported = me.exports;
        }

        exports(exported);
      }

      for (var i=0, len=dependencies.length; i < len; i++) {
        var d = dependencies[i];
        if (indexOf(['require', 'exports'], d) == -1) {
          mods.push(amdResolve(d, me));
        }
      }

      if (mods.length > 0) {
        using.apply(this, mods.concat(executeAMD));
      } else {
        executeAMD();
      }
    });
  }

  amdDefine.amd = {};

  function using() {
    var deps = makeArray(arguments), callback;

    if (typeof deps[deps.length-1] == 'function') {
      callback = deps.pop();
    }

    var combi = new Collection(mapDependencies(deps));

    if (callback) {
      combi.then(callback);
    }

    return combi;
  }

  function mapDependencies(deps) {
    var mapped = [];

    for (var i=0, dep; dep = deps[i]; i++) {
      if (typeof dep == 'string') {
        dep = createDependency(dep);
      }

      if (isArray(dep)) {
        dep = new Sequence(mapDependencies(dep));
      }

      mapped.push(dep);
    }

    return mapped;
  }

  function createDependency(id) {
    var m, dep;

    for (var i=0, matcher; matcher = using.matchers[i]; i++) {
      var regex = matcher[0], factory = matcher[1];
      if (m = id.match(regex)) {
        return factory(id);
      }
    }
  }

  using.path = '';

  using.matchers = [];
  using.matchers.add = function(regex, factory) {
    this.push([regex, factory]);
  };

  using.matchers.add(/\.js$/, function(path) {
    var script = new Script(path.replace(/^\$/, using.path.replace(/\/$/, '') + '/'), false);
    script.id = path;
    return script;
  });

  using.matchers.add(/^[a-zA-Z0-9_\-\/]+$/, function(id) {
    return new Module(id);
  });

  context.loadrunner = {
    Script: Script,
    Module: Module,
    Collection: Collection,
    Sequence: Sequence,
    Dependency: Dependency
  };

  context.using   = using;
  context.provide = provide;
  context.define  = amdDefine;

  if (scriptTag) {
    using.path = scriptTag.getAttribute('data-path') || scriptTag.src.split(/loadrunner\.js/)[0] || '';

    if (main = scriptTag.getAttribute('data-main')) {
      using.apply(context, main.split(/\s*,\s*/)).then(function() {});
    }
  }
}(this, document));
