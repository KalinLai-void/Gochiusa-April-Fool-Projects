/* mav.js v2.0.6 / 2019-11-14 | by yuya harata */

var MAVJS = MAVJS || {};

/* ==========================================
*  ランダム数字生成
========================================== */

MAVJS.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/* ==========================================
*  keyを指定して特定のvalueを持つオブジェクトを取得
========================================== */

MAVJS.getObjByKeyValue = function(array, key, value) {
  var result = $.grep(array, function(e) {
    return e[key] == value;
  });
  return result;
}

/* ==========================================
*  オブジェクト配列ソート
*  array   : Array [{},{},{}...]
*  key   : string
*  order : string "asc"(default) or "desc"
========================================== */

MAVJS.sortObjArray = function(array, key, order) {
  var reverse = 1;
  if (order && order.toLowerCase() == "desc")
    reverse = -1;
  array.sort(function(a, b) {
    if (a[key] < b[key])
      return -1 * reverse;
    else if (a[key] == b[key])
      return 0;
    else
      return 1 * reverse;
  });
}

/* ==========================================
* Cookieの設定
* Cookie名, Cookieの値, Cookieの有効日数
========================================== */

MAVJS.setCookie = function(c_name, value, expiredays) {
  var path = location.pathname;
  var paths = new Array();
  paths = path.split("https://gochiusa.com/");
  if (paths[paths.length - 1] != "") {
    paths[paths.length - 1] = "";
    path = paths.join("https://gochiusa.com/");
  }
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60 * 60 * 24 * 1000 * expiredays));
  var exdate = cltime.toUTCString();
  var s = "";
  s += c_name + "=" + escape(value);
  s += "; path=" + path;
  if (expiredays) {
    s += "; expires=" + exdate + "; ";
  } else {
    s += "; ";
  }
  document.cookie = s;
}

/* ==========================================
* Cookieの取得
* Cookie名, Cookieの値, Cookieの有効日数
========================================== */

MAVJS.getCookie = function(c_name) {
  var st = "";
  var ed = "";
  if (document.cookie.length > 0) {
    st = document.cookie.indexOf(c_name + "=");
    if (st != -1) {
      st = st + c_name.length + 1;
      ed = document.cookie.indexOf(";", st);
      if (ed == -1) ed = document.cookie.length;
      return unescape(document.cookie.substring(st, ed));
    }
  }
  return "";
}

/* ==========================================
*  ユーザーエージェント
========================================== */

MAVJS.addUserAgent = function() {
  window.UA = {};

  var $body = $("body"),
    ua = navigator.userAgent.toLowerCase();

  UA.os = (function() {
    return {
      Windows: (ua.indexOf("win") != -1),
      Mac: ((ua.indexOf('mac') > -1) && (ua.indexOf('os') > -1)) && !((ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1) || (ua.indexOf('windows') > -1)),
      iOS: (ua.indexOf('iphone') > 0) || (ua.indexOf('ipad') > 0),
      Android: (ua.indexOf('android') > 0) && (ua.indexOf('mobile') > 0)
    }
  })();

  UA.browser = (function() {
    return {
      IE: (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1) || (ua.indexOf('trident/7') > -1),
      Edge: (ua.indexOf('edg') > -1),
      Chrome: (ua.indexOf('chrome') > -1) && (ua.indexOf('edg') == -1),
      Firefox: (ua.indexOf('firefox') > -1),
      Safari: (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1),
      Opera: (ua.indexOf('opera') > -1)
    }
  })();

  UA.device = (function() {
    return {
      Tablet: (ua.indexOf("windows") != -1 && ua.indexOf("touch") != -1 && ua.indexOf("tablet pc") == -1) ||
        ua.indexOf("ipad") != -1 ||
        (ua.indexOf("android") != -1 && ua.indexOf("mobile") == -1) ||
        (ua.indexOf("firefox") != -1 && ua.indexOf("tablet") != -1) ||
        ua.indexOf("kindle") != -1 ||
        ua.indexOf("silk") != -1 ||
        ua.indexOf("playbook") != -1,
      Mobile: (ua.indexOf("windows") != -1 && ua.indexOf("phone") != -1) ||
        ua.indexOf("iphone") != -1 ||
        ua.indexOf("ipod") != -1 ||
        (ua.indexOf("android") != -1 && ua.indexOf("mobile") != -1) ||
        (ua.indexOf("firefox") != -1 && ua.indexOf("mobile") != -1) ||
        ua.indexOf("blackberry") != -1
    }
  })();

  UA.device.PC = (function() {
    var pc;
    if (UA.device.Tablet || UA.device.Mobile) {
      var pc = false;
    } else {
      var pc = true;
    }
    return pc;
  })();

  if (UA.browser.Opera) {
    $body.attr("data-browser", "Opera");
  } else if (UA.browser.IE) {
    $body.attr("data-browser", "IE");
  } else if (UA.browser.Chrome) {
    $body.attr("data-browser", "Chrome");
  } else if (UA.browser.Safari) {
    $body.attr("data-browser", "Safari");
  } else if (UA.browser.Edge) {
    $body.attr("data-browser", "Edge");
  } else if (UA.browser.Firefox) {
    $body.attr("data-browser", "Firefox");
  }

  if (UA.device.Mobile) {
    $body.attr("data-device", "Mobile");
  } else if (UA.device.Tablet) {
    $body.attr("data-device", "Tablet");
  } else {
    $body.attr("data-device", "PC");
  }

  if (UA.os.iOS) {
    $body.attr("data-os", 'iOS');
  } else if (UA.os.Android) {
    $body.attr("data-os", 'Android');
  } else if (UA.os.Windows) {
    $body.attr("data-os", 'Windows');
  } else if (UA.os.Mac) {
    $body.attr("data-os", 'Mac');
  }

}

/* ==========================================
*  同一ドメインからのリンク判定
========================================== */

MAVJS.checkReferer = function() {
  var ref = document.referrer,
    domain = location.hostname,
    referer = ref != "" && ref != "http://" + domain && ref != "http://" + domain + "/" && ref != "http://" + domain + "/index.html" && ref != "https://" + domain && ref != "https://" + domain + "/" && ref != "https://" + domain + "/index.html" && (ref.indexOf("http://" + domain) === 0 || ref.indexOf("https://" + domain) === 0);
  return referer;
}

/* ==========================================
* URL自動aタグ化
========================================== */

MAVJS.createAnchorTag = function(target) {
  $(target).each(function() {
    var thisHTML = $(this).html();
    if ( thisHTML.match(/<\/a>/g) ) {
      return;
    }

    $(this).html(thisHTML.replace(/((http|https):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'));
  });
}

/* ========================================
aタグ rel追加
========================================= */

MAVJS.addRelNoopener = function() {
  $('a[target="_blank"]').each(function(i, e) {
    if (!$(this).is('[rel]')) {
      $(this).attr('rel', 'noopener noreferrer');
    }
  });
}

/* ==========================================
*  相対リンクのindex.html削除
========================================== */

MAVJS.removeIndexHtml = function() {
  $('a:not([href^="http"])').each(function(i) {
    var href = $(this).attr('href');
    if (typeof href !== 'undefined' && href !== false) {
      if (href.indexOf('index.html') >= 0) {
        $(this).attr('href', href.replace('index.html', ''));
      }
    }
  });
}

/* ==========================================
*  カスタムマーカーリスト
========================================== */

MAVJS.customMarkerList = function() {
  $(".c-customMarkerList").each(function() {
    var marker = $(this).attr("data-listMarker");
    $(this).children().attr("data-listMarker", marker);
  });

  $("body").append('<style>.c-customMarkerList>li::before { content: attr(data-listmarker); } <style>');
}

/* ==========================================
*  スムーススクロール
========================================== */

MAVJS.smoothScroll = function(offsetY, time, easing, scrollLink) {
  if (typeof offsetY === "undefined") {
    var offsetY = -50;
  }
  if (typeof time === "undefined") {
    var time = 1000;
  }
  if (typeof easing === "undefined") {
    var easing = "easeInOutQuint";
  }
  if (typeof scrollLink === "undefined") {
    var scrollLink = 'a[href^="#"],a[href^="index.php#"]';
  }

  var scrollLink = $(scrollLink),
    scrollToTop = $('.js-scrollToTop');

  scrollLink.on("click", function() {
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top + offsetY;
    $('html,body').animate({
      scrollTop: targetY
    }, time, easing);
    window.history.pushState(null, null, this.hash);
    return false;
  });

  scrollToTop.on("click", function() {
    $('html,body').animate({
      scrollTop: 0
    }, time, easing);
    return false;
  })
}

/* ==========================================
*  ソーシャルシェア
========================================== */

MAVJS.socialShare = function(hashtag, related) {

  if (typeof hashtag === "undefined") {
    var hashtag = "";
  }
  if (typeof related === "undefined") {
    var related = "";
  }

  var title = encodeURIComponent(decodeURIComponent( document.title )).replace(/&/g, "%26").replace(/#/g,"%23"),
    hashtag = encodeURI(decodeURI( hashtag )).replace(/#/g,""),
    url = location.href.split("#"),
    $shareTwitter = $('.js-share--twitter'),
    $shareFacebook = $('.js-share--facebook'),
    $shareLine = $('.js-share--line'),
    twitterHref = 'https://twitter.com/intent/tweet?text=' + title + '%0D%0A' + '&url=' + url[0] + '&hashtags=' + hashtag + '&related=' + related,
    facebookHref = 'http://www.facebook.com/sharer.php?u=' + url[0],
    lineHref = 'https://social-plugins.line.me/lineit/share?url=' + url[0] + '&text=' + title;

  function newShareWindow() {
    var w = 550,
      h = 500,
      x = (screen.width - w) / 2,
      y = (screen.height - h) / 2;
    window.open(this.href, null, 'screenX=' + x + ',screenY=' + y + ',left=' + x + ',top=' + y + ',width=' + w + ',height=' + h);
    return false;
  }

  $shareTwitter.attr('href', twitterHref);
  $shareFacebook.attr('href', facebookHref);
  $shareLine.attr('href', lineHref);

  $shareTwitter.on('click', newShareWindow);
  $shareFacebook.on('click', newShareWindow);
  $shareLine.on('click', newShareWindow);
}

/* ==========================================
* Prev / Next
========================================== */

MAVJS.replaceTextNextPrev = function(prevText, nextText) {
  $('.nb_pre_text').text(prevText);
  $('.nb_nex_text').text(nextText);
}

/* ==========================================
* ページネーション テキスト整形
========================================== */

MAVJS.replaceTextPagenation = function() {
  $(".nb_navi").each(function() {
    var _this = $(this);
    var _thisPage = _this.children(".page");
    _thisPage.html(_thisPage.html().replace(/&nbsp;|&lt;|&gt;/g, ''));
    _this.find(".PageNom2,.page_lang2").remove();
    _this.find(".page_lang_number").eq(0).children(".page_lang_number_text").remove();
    _this.find(".PageNom1,.page_lang1").appendTo(_thisPage);
    _this.find(".nom").before("／");
  });
}

/* ==========================================
*  Type_1～3
========================================== */

MAVJS.addClassImgType = function() {
  $('.img_t').parent().addClass('type_1_t');
  $('.img_r').parent().addClass('type_1_r');
  $('.img_u').parent().addClass('type_1_u');
  $('.img_l').parent().addClass('type_1_l');
  $('.read_c').parent().removeClass('type_1_t').removeClass('type_1_r').removeClass('type_1_u').removeClass('type_1_l').addClass('type_2');
  $('.img_l_tp3').parent().addClass('type_3_l');
  $('.img_r_tp3').parent().addClass('type_3_r');
}

/* ==========================================
*  Type_4
========================================== */

MAVJS.replaceType4 = function() {
  var table = $(".tp4"),
    atlInner = table.parent();

  // block
  $(atlInner).addClass('type_4');
  $(atlInner).prepend('<ul class="type4List" />');
  $(atlInner).find('img').wrap('<div class="type4List__img"/>');

  for (var i = 0; i < atlInner.length; i++) {
    var column = $(atlInner[i]).find('td').eq(0).attr('class');
    $(atlInner[i]).children('.type4List').addClass('type4List--' + column);
  }

  // table
  for (var i = 0; i < table.length; i++) {
    //list
    var list = $(table[i]).prevAll('.type4List'),
      img = $(table[i]).find(".type4List__img"),
      cap = $(table[i]).find(".cap");
    // line
    for (var j = 0; j < img.length; j++) {
      list.append('<li class="type4List__item"/>');
      var listItem = list.children('.type4List__item');
      $(listItem).eq(-1).append(img.eq(j)).append(cap.eq(j));

      var anchor = $(table[i]).find("td").eq(j).find("a");
      if (anchor.length > 0) {
        var href = anchor.attr("href"),
          target = anchor.attr("target");
        if (!target) {
          var target = "";
        }
        $(listItem).eq(-1).wrapInner('<a href="' + href + '" target="' + target + '" class="nonmover" />');
      }
    }
  }

  $(table).remove();
}

/* ==========================================
*  リストのNEWマークを親に追加
========================================== */

MAVJS.addNewMark = function(target) {
  var $target = $(target);

  $target.each(function() {
    var _this = $(this);
    if (_this.find(".new_ic").length > 0) {
      _this.addClass("is-new");
    }
  });
}

/* ==========================================
*  リスト／リンク全体化
========================================== */

MAVJS.anchorParentClickable = function(target) {
  var $target = $(target);

  $target.each(function() {
    var _this = $(this);
    if (_this.find("a").length == 0) {
      _this.addClass("is-noLink");
    }
  });

  $target.on("click", function() {
    var $anchor = $(this).find("a");
    if ($anchor.attr("target") === "_blank") {
      window.open($anchor.attr("href"), '_blank');
    } else if ($anchor.length > 0) {
      window.location = $anchor.attr("href");
    }
    return false;
  });
}

/* ==========================================
*  カレント
========================================== */

MAVJS.listUnitAddCrt = function(unitID, usePrevNext, loopPrevNext, prevBtnClass, nextBtnClass, titleSrcElement, titleSrcType) {

  if (typeof usePrevNext === "undefined") {
    var usePrevNext = false;
  }
  if (typeof loopPrevNext === "undefined") {
    var loopPrevNext = false;
  }
  if (typeof prevBtnClass === "undefined") {
    var prevBtnClass = ".naviArrow__prev";
  }
  if (typeof nextBtnClass === "undefined") {
    var nextBtnClass = ".naviArrow__next";
  }
  if (typeof titleSrcElement === "undefined") {
    var titleSrcElement = ".title a";
  }
  if (typeof titleSrcType === "undefined") {
    var titleSrcType = "text";
  }

  var $contArray = $(unitID).find('.nwu_box, [summary="List_Type01"]>tbody>tr');
  var contArrayLength = $contArray.length;
  var crtUrl = document.URL.split('/');
  var crtUrlSplit = crtUrl[crtUrl.length - 2] + "/" + crtUrl[crtUrl.length - 1].replace("index-2.html", "");

  // カレントチェック
  function checkCrtNumber() {
    for (var i = 0; i < contArrayLength; i++) {
      var listUrl = $contArray.eq(i).find('a').attr('href').split('https://gochiusa.com/');
      var listUrlSplit = listUrl[listUrl.length - 2] + "/" + listUrl[listUrl.length - 1].replace("index-2.html", "");
      if (listUrlSplit === crtUrlSplit) {
        return i;
      }
    }
    return;
  }

  var crtNumber = checkCrtNumber();

  function prevNextLink() {
    var $prevBtn = $(prevBtnClass);
    var $nextBtn = $(nextBtnClass);

    var nextNumber = crtNumber + 1;
    var prevNumber = crtNumber - 1;
    var position = "";

    if (crtNumber === 0) {
      var prevNumber = $contArray.length - 1;
      if (!loopPrevNext) {
        $prevBtn.addClass("is-disabled");
      }
    } else if (crtNumber + 1 === $contArray.length) {
      var nextNumber = 0;
      if (!loopPrevNext) {
        $nextBtn.addClass("is-disabled");
      }
    }

    var prevUrl = $contArray.eq(prevNumber).find("a").attr("href");
    var nextUrl = $contArray.eq(nextNumber).find("a").attr("href");

    switch (titleSrcType) {
      case "text":
        var prevTitle = $contArray.eq(prevNumber).find(titleSrcElement).text();
        var nextTitle = $contArray.eq(nextNumber).find(titleSrcElement).text();
        break;
      case "html":
        var prevTitle = $contArray.eq(prevNumber).find(titleSrcElement).html();
        var nextTitle = $contArray.eq(nextNumber).find(titleSrcElement).html();
        break;
      case "alt":
        var prevTitle = $contArray.eq(prevNumber).find(titleSrcElement).attr("alt");
        var nextTitle = $contArray.eq(nextNumber).find(titleSrcElement).attr("alt");
        break;
      default:
        var prevTitle = "";
        var nextTitle = "";
        break;
    }

    $prevBtn.find("a").attr({
      href: prevUrl,
      title: prevTitle
    });
    $nextBtn.find("a").attr({
      href: nextUrl,
      title: nextTitle
    });
  };

  $contArray.eq(crtNumber).addClass('is-crt');
  if (usePrevNext) {
    prevNextLink();
  }
}

/* ========================================
slider
'#js-screen'
'.c-no0 .img_link'
4000
========================================= */
MAVJS.slideImg = function(target, slideImg, time) {
  var $imgLink = $(slideImg);
  var pos = 0;
  var length = $imgLink.length;
  var timer = null;

  if (time === undefined) {
    var time = 4000; //0にすると自動送り停止
  }

  function setNext() {
    if (time > 0) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        timer = null;
        pos++;
        if (pos >= length) {
          pos = 0;
        }
        $imgLink.eq(pos).trigger('click');
        setNext();
      }, time);
    }
  }

  $imgLink.each(function(index, element) {
    $(target).append('<img src="' + $(this).attr('href') + '" class="prev_img" id="prev_img' + index + '" />');
    $(this).attr('id', 'gallery_link' + (index + 1));
    if (index > 0) {
      $('#prev_img' + index).css({
        'opacity': 0,
        'position': 'absolute'
      });
      $(this).addClass('gallery_link gallery_link_off');
    } else {
      $('#prev_img' + index).css({
        'position': 'absolute'
      });
      $(this).addClass('gallery_link gallery_link_on');
    }

    $(this).on('click', function() {
      $('.gallery_link').not(this).removeClass('gallery_link_on').addClass('gallery_link_off');
      $(this).removeClass('gallery_link_off').addClass('gallery_link_on');
      for (var i = 0; i < length; i++) {
        if (i === index) {
          $('#prev_img' + i).stop().animate({
            'opacity': 1
          }, 500);
        } else {
          $('#prev_img' + i).stop().animate({
            'opacity': 0
          }, 500);
        }
      }
      pos = index;
      setNext();
      return false;
    });
  });

  setNext();
}

/* ==========================================
*  表示領域に入ったらクラス追加
========================================== */

MAVJS.addClassWhenVisible = function(target, className, offset, remove) {
  $(window).on('load scroll resize', function() {
    var scrollTop = $(window).scrollTop(),
      scrollBtm = scrollTop + $(window).height();

    $(target).each(function() {
      var _this = $(this),
        targetTop = _this.offset().top,
        targetBtm = targetTop + _this.height();
      if (scrollBtm > targetTop + offset && scrollTop < targetBtm) {
        _this.addClass(className);
      } else {
        if (remove) {
          _this.removeClass(className);
        }
      }
    });
  });
}

/* ==========================================
*  右クリック禁止
========================================== */

MAVJS.noRightClick = function(target) {
  $(target).on('contextmenu', function(e) {
    return false;
  });
}
/* ==========================================
*  コピー禁止
========================================== */

MAVJS.noCopy = function(target) {
  $(target).on('copy', function(e) {
    return false;
  });
}

/* ==========================================
*  ドラッグ禁止
========================================== */

MAVJS.noDrag = function(target) {
  $(target).on('mousedown mouseup', function(e) {
    return false;
  });
}
