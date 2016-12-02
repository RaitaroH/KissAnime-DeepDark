// ==UserScript==
// @name          KissAnime DeepDark
// @namespace     https://github.com/
// @author        RaitaroH
// @homepage      https://github.com/RaitaroH/KissAnime-DeepDark
// @include       http://kissanime.com/*
// @include       https://kissanime.com/*
// @include       http://*.kissanime.com/*
// @include       https://*.kissanime.com/*
// @include       http://kissanime.to/*
// @include       https://kissanime.to/*
// @include       http://*.kissanime.to/*
// @include       https://*.kissanime.to/*
// @run-at        document-start
// @version       0.20151106074303
// ==/UserScript==
(function() {var css = [
	"#head h1 {",
	"    background: url(http://i.imgur.com/jnt6rO6.png) !important;",
        "    width: 80% !important;",
	"    margin: -70px 10px 0px 0px !important;",
	"}",
	"a.prev,a.prev:hover {",
	"    background: url(https://i.imgur.com/V3W8cnw.png) !important;",
	"}",
	"a.next,a.next:hover {",
	"    background: url(https://i.imgur.com/D3MhIGP.png) !important;",
	"}",
	".barContent > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) {",
	"    background: url(https://i.imgur.com/V3W8cnw.png) 0px -5px repeat-x  !important;",
	"}",
	".barContent > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2) {",
	"    background: url(https://i.imgur.com/D3MhIGP.png) 0px -5px repeat-x  !important;",
	"}",
	"#btnPrevious,#btnNext {",
        "  vertical-align: top !important;",
        "  width: auto !important;",
        "  position: relative !important;",
        "  z-index: -1 !important;",
	"}",
	"    #head h1 a.logo {",
	"        padding-bottom: 10px !important;",
	"        width: 600px !important;",
	"        margin-top: 24px !important;",
	"        margin-left: 20px !important;",
	"        z-index: 9999 !important;",
	"    }",
	"#headnav {",
	"    background: transparent !important;",
	"    margin: 0px !important;",
	"}",
	"#navcontainer a:link, #navcontainer a:visited, #navcontainer a:hover, #navcontainer a:visited {",
	"    background: transparent !important;",
	"    color: #fff !important;",
	"}",
	"#navcontainer {",
	"    top: 0px !important;",
	"}",
	"#navbar {",
	"    height: 27px !important;",
	"    background: #333 !important;",
	"    position: relative !important;",
	"    margin-bottom: 25px !important;",
	"}",
	" .banner img:hover, div.items img:hover,#subcontent div a img:hover{",
	"    border-color: #00adee !important;",
	"}",
	"a, .nextEpisodeCountDown, .details,div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(6), div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(7), #navcontainer li a#currentTab:hover {",
	"    color: #fff !important;",
	"}",
	".title, div.items a, .bigChar, .bigChar:visited, #nextEpisodeCountDown {",
	"    color: rgba(0,173,238,.9)  !important; ",
	"}",
	".a:link:hover,a:hover, a:visited:hover, #tabmenucontainer a:hover,.dotUnder:hover,.episodeList td a:visited:hover,.title:hover, div.items a:hover, .bigChar:hover, #nextEpisodeCountDown:hover,div.rightBox:nth-child(3) > div:nth-child(2) > div:nth-child(2) > a:nth-child(10):hover,#navcontainer a:hover {",
	"color: rgb(0,173,238) !important; ",
	"text-shadow: 0px 0px 3px rgba(0,173,238,.5) !important;",
	"}",
	"a:visited, .episodeList td a:visited, .episodeVisited, .episodeList td a:visited {",
	"    color: #555 !important;",
	"}",
	".textDark {",
	"    color: #808080 !important;",
	"}",
	"#navsubbar,#spanBookmark,#imgSearch,div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > img:nth-child(1),.arrow-general,#formSearch > div:nth-child(4) > a:nth-child(1) > img:nth-child(1),#adsIfrme3,div.bigBarContainer:nth-child(7) ,#topHolderBox,#divReload,div.rightBox:nth-child(5) > div:nth-child(2),div.rightBox:nth-child(5) > div:nth-child(1),div.rightBox:nth-child(5),#rightside > div:nth-child(4), .barContent > div:nth-child(1) > div:nth-child(11),div.clear2:nth-child(9), .barContent > div:nth-child(1) > div:nth-child(2), div.clear2:nth-child(10), div.clear2:nth-child(8),  #containerRoot > div:nth-child(17),#containerRoot > div:nth-child(20),div.clear:nth-child(21),.clsTempMSg > div:nth-child(3),div.clear:nth-child(17),.barContent > div:nth-child(1) > div:nth-child(23),#divDownload,#divFileName,#footer,div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6),div.clear2:nth-child(5),#leftside > div:nth-child(6),.barContent > div:nth-child(1) > div:nth-child(3),#containerRoot > div:nth-child(12),div.clear2:nth-child(13),#containerRoot > div:nth-child(14),#containerRoot > div:nth-child(14),div.clear2:nth-child(15),div.clear2:nth-child(19),div.clear:nth-child(22),#containerRoot > div:nth-child(23),.clsTempMSg,.clsTempMSg > div:nth-child(1),.clsTempMSg > div:nth-child(2),div.clear2:nth-child(20),div.clear2:nth-child(27) {",
	"    display: none !important;",
	"}",
	"    /* SEARCH */",
	"    ",
	"    #search {",
	"        /*position: absolute !important;*/",
	"        top: 121px !important;",
	"        right: -60px !important;",
	"        visibility: visible !important;",
	"        z-index: 999 !important;",
	"    }",
	"    #keyword {",
	"        width: 150px !important;",
	"}",
	"    #formSearch > div > a {",
	"        position: absolute !important;",
	"        color: #FFF !important;",
	"        padding: 10px 10px 10px 10px;",
	"        font-weight: bold !important;",
	"        top: -7px !important;",
	"        right: -100px !important;",
	"        background-color: transparent !important;",
	"        transition: all 0.3s ease-in-out 0s !important;",
	"    }",
	"    input.text:focus {",
	"        width: 99% !important;",
	"        transition: all 0.3s ease-in-out 0s !important;",
	"    }",
	"    input.text {",
	"        margin: 0px;",
	"        font: 15px \"Tahoma\", Arial, Helvetica, sans-serif;",
	"        color: #CCC;",
	"        border: 0px solid rgb(102, 102, 102);",
	"        background: #161616 !important;",
	"        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important;",
	"        transition: all 0.3s ease-in-out 0s !important;",
	"    }",
	"    #result_box {",
	"        margin-top: 14px !important;",
	"        opacity: 1;",
	"        width: 88.7% !important;",
	"        background-color: #161616 !important;",
	"        margin-left: -56px !important;",
	"        border-radius: 0px !important;",
	"        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important;",
	"    }",
	"    #result_box a {",
	"        position: static !important;",
	"    }",
	"div.clear:nth-child(1) {",
	"    height: 10px !important;",
	"}",
	"/*",
	"div.rightBox:nth-child(7) {",
	"    position: absolute !important;",
	"    top: 590px !important;",
	"}",
	"div.rightBox:nth-child(1) {",
	"    position: absolute !important;",
	"    top: 184px !important;",
	"}",
	"*/",
	"#navcontainer li a#currentTab {",
	"    float: left!important;",
	"    background: none!important;",
	"    background-position: 0% 0px!important;",
	"    background-color: #00adee !important;",
	"    color: Black!important;",
	"    text-decoration: none!important;",
	"    line-height: 27px!important;",
	"}",
	".barTitle {",
	"    height: 25px!important;",
	"    padding-left: 10px!important;",
	"    background: none!important;",
	"    background-color: #333 !important;",
	"    font: normal 17px/23px \"Tahoma\", Arial, Helvetica, sans-serif!important;",
	"    letter-spacing: -1px!important;",
	"    color: #fff !important;",
	"}",
	".banner {",
	"    margin: 0 0 10px 0!important;",
	"    padding: 0px!important;",
	"    width: 100%!important;",
	"    background: none!important;",
	"    height: 208px!important;",
	"    position: relative !important;",
	"    top: -9px !important;",
	"}",
	".episodeList td a:hover,body.dark,element.style {",
	"    color: #00adee!important;",
	"}",
	".listing tr:hover td {",
	"    background: none repeat scroll 0 0 #1D1D1D!important;",
	"}",
	"html,body {",
	"    margin: 0px!important;",
	"    padding: 0px!important;",
	"    font: normal 12px \"Tahoma\", Arial, Helvetica, sans-serif!important;",
	"    line-height: 18px!important;",,
	"    background-color: #111111!important;",
	"    height: 100%!important;",
	"}",
	".textarea-wrapper {",
	"    position: relative!important;",
	"    margin: 0 0 0 60px!important;",
	"    background: #949191!important;",
	"    border: 2px solid #00adee!important;",
	"    border: 2px solid rgba(0, 39, 59, .2)!important;",
	"    border-radius: 4px!important;",
	"}",
	".boxDropDown {",
	"    border: 1px solid #00adee!important;",
	"    -webkit-border-top-right-radius: 3px!important;",
	"    -webkit-border-top-left-radius: 3px!important;",
	"    -webkit-border-bottom-right-radius: 3px!important;",
	"    -webkit-border-bottom-left-radius: 3px!important;",
	"    -moz-border-radius-topright: 3px!important;",
	"    -moz-border-radius-topleft: 3px!important;",
	"    -moz-border-radius-bottomright: 3px!important;",
	"    -moz-border-radius-bottomleft: 3px!important;",
	"    border-top-right-radius: 3px!important;",
	"    border-top-left-radius: 3px!important;",
	"    border-bottom-right-radius: 3px!important;",
	"    border-bottom-left-radius: 3px!important;",
	"    background: #00adee!important;",
	"    display: inline-block!important;",
	"    width: auto!important;",
	"    height: 20px!important;",
	"    font-size: 12px!important;",
	"    font-weight: bold!important;",
	"    color: #949191!important;",
	"    text-align: center!important;",
	"    padding-top: 2px!important;",
	"}",
	"#menu_box a {",
	"    color: #949191!important;",
	"    display: inline-block!important;",
	"    width: 100%!important;",
	"    line-height: 30px!important;",
	"    text-decoration: none!important;",
	"    border-bottom: 1px solid #00adee!important;",
	"}",
	"#menu_box {",
	"    position: absolute!important;",
	"    top: 29px!important;",
	"    left: 221px!important;",
	"    width: 175px!important;",
	"    color: #FFF!important;",
	"    background: #00adee!important;",
	"    font-family: Arial!important;",
	"    font-size: 12px!important;",
	"    z-index: 100!important;",
	"    text-align: left!important;",
	"    border-top: 1px solid #949191!important;",
	"    border-left: 1px solid #949191!important;",
	"    border-right: 1px solid #949191!important;",
	"}",
	"#menu_box a:hover {",
	"    background: #161616!important;",
	"}",
	"#tabmenucontainer a:link,",
	"#tabmenucontainer a:visited,",
	"#tabmenucontainer a:hover,",
	"#tabmenucontainer li a.tabactive {",
	"    float: left;",
	"    background-color: #00adee !important;",
	"    background: none !important;",
	"    background-position: 0% -25px !important;",
	"}",
	"#tabmenucontainer li a.tabactive {",
	"    background-color: #00adee !important;",
  "    color: black !important;",
	"}",
  "#tabmenucontainer li a.tabactive:hover {",
	"    color: white !important;",
	"}",
	"#tabmenucontainer li a.tabactive:hover {",
	"    color: white !important;",
	"}",
	".aButton {",
	"    color: #949191!important;",
	"    display: inline-block!important;",
	"    text-decoration: none!important;",
	"    border-bottom: 1px solid #949191!important;",
	"    border-top: 1px solid #949191!important;",
	"    border-left: 1px solid #949191!important;",
	"    border-right: 1px solid #949191!important;",
	"    background: #00adee!important;",
	"    cursor: pointer!important;",
	"    text-align: center!important;",
	"    width: 50px!important;",
	"    line-height: 200%!important;",
	"}",
	"/*Video*/",
	".vjs-default-skin .vjs-play-progress, .vjs-default-skin .vjs-volume-level{",
	"    background: #00adee !important;",
	"}",
	".vjs-default-skin .vjs-control-bar{",
	"    background: #222 !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
	heads[0].appendChild(node); 
	} else {
	// no head yet, stick it whereever
	document.documentElement.appendChild(node);
	}
}
})();
