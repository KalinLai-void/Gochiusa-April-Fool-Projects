function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=a[i])!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  obj = window.open(theURL,winName,features);
  obj.focus();
}

function change_Disp(Obj,flg) {
	if(flg == 1){
		if(nn4){
			Obj.visibility = "show";
		}else{
			Obj.style.visibility = "visible";
		}
	}else if(flg == 2){
		if(nn4){
			Obj.visibility = "hide";
		}else{
			Obj.style.visibility = "hidden";
		}
	}
}

function change_H(Obj,W,H) {
	if(nn4){
		Obj.resizeTo(W,H);
	}else if(nn6) {
		Obj.style.height = H + "px";
		Obj.style.width = W + "px";
	}else if(ie) {
		Obj.style.pixelHeight = H;
		Obj.style.pixelwidth = W;
	}else if(opera) {
		Obj.style.height = H;
		Obj.style.width = W;
	}
}

function focusColor(i){
	i.style.backgroundColor='#fffcdb';
}
function blurColor(i){
	i.style.backgroundColor='#ffffff';
}

//ブラウザ情報の取得
dom = document.getElementById; //W3C DOM をサポートする場合
opera = navigator.userAgent.indexOf("Opera")>-1; //Opera
safari=(navigator.userAgent.indexOf("Safari")!=-1) || false;
ie4 = document.all && !dom && !opera; //Internet Explorer 4.x
ie5 = document.all && dom && !opera; //Internet Explorer 5.x 以上
ie = ie4 || ie5; //Internet Explorer 4.x 以上
netscape = navigator.appName.indexOf("Netscape",0)>-1; //Netscape
nn4 = document.layers && netscape; //Netscape 4.x
nn6 = dom && netscape; //Netscape 6.x 以上


//スタイルスイッチ
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

//==== returns a layer reference
function rgnavi(gname) {
	if (ie4) {
		gnavi = eval("document.all."+gname+".style")
	 }
	else if (nn4) {
		gnavi = eval("document.layers['"+gname+"']");
	 }
	else if (nn6 || ie5 || safari || opera) {
		gnavi = eval("document.getElementById('"+gname+"').style")
	 }
	return gnavi
}
var MM_contentVersion = 6;
var MM_FlashCanPlay = false;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if (plugin) {
	var words = navigator.plugins["Shockwave Flash"].description.split(" ");
	for (var i = 0; i < words.length; ++i) {
		if (isNaN(parseInt(words[i])))
		continue;
		var MM_PluginVersion = words[i];
	}
	MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0
	&& (navigator.appVersion.indexOf("Win") != -1)) {
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n'); //FS hide this from IE4.5 Mac by splitting the tag
	document.write('on error resume next \n');
	document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
	document.write('</SCR' + 'IPT\> \n');
}




/* Flash write
--------------------------------------------------------------------------	*/

function object_write(file_path, obj_width, obj_height, obj_name, obj_color, obj_wmode){
	var obj = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" data="'+file_path+'" id="'+obj_name+'" width="'+obj_width+'" height="'+obj_height+'">';

	if (obj_wmode == "true"){
		obj += '<param name="wmode" value="transparent">';
		var w_mode = 'wmode=transparent';
	} else {
		var w_mode = '';
	}

	obj += '<param name="menu" value="false">';
	obj += '<param name="movie" value="'+file_path+'">';
	obj += '<param name="quality" value="high">';
	obj += '<param name="bgcolor" value="#'+ obj_color +'">';
	obj += '<embed src="'+file_path+'" menu=false width='+obj_width+' height='+obj_height+' quality=high bgcolor=#'+obj_color+' name='+obj_name+' align=middle type=application/x-shockwave-flash pluginspage="https://www.macromedia.com/go/getflashplayer" '+w_mode+'><'+'/embed><'+'/object>';

	document.write(obj);
}
