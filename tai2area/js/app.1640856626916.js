(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"0aec":function(t,e,i){t.exports=i.p+"img/李昇翰.2a4d11da.png"},"0d78":function(t,e,i){},"0efe":function(t,e,i){t.exports=i.p+"img/林金連.1a977a9e.png"},"15cd":function(t,e,i){"use strict";i("74e5")},"1ae8":function(t,e,i){"use strict";i("add4")},2082:function(t,e,i){"use strict";i("0d78")},"3b29":function(t,e,i){},"452c":function(t,e,i){},"4c4a":function(t,e,i){t.exports=i.p+"img/banner.1675c502.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("e792"),i("0cdd");var a=i("2b0e"),n=i("5f5b");i("ab8b"),i("2dd8");a["default"].use(n["a"]);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("COntentBanner"),i("ContentProfile"),i("InfogramVoted"),i("ContentProcess"),i("ContentVideo"),i("ContentNews"),i("Footer"),i("AdditionSide"),i("AdditionScrolltop"),i("AdditionBottom")],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"progress"}),i("div",{staticClass:"flex-logo"},[i("i",{staticClass:"fad fa-2x fa-list",on:{click:t.menu}},[i("nav",{staticClass:"nav"},t._l(t.list,(function(e,a){return i("a",{key:a,attrs:{href:e.anchor}},[t._v(" "+t._s(e.title)+" ")])})),0)])])])},l=[],c={data:function(){return{list:[{title:"直播專區",anchor:"#video"},{title:"候選人介紹",anchor:"#profile"},{title:"補選程序",anchor:"#porcess"},{title:"最新新聞",anchor:"#news"}]}},methods:{scroll:function(){var t=this;window.addEventListener("scroll",(function(){t.moveBar("#374674")}))},moveBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#0984e3",e=document.querySelector(".progress"),i=Math.ceil(Math.round(window.pageYOffset)/(document.body.scrollHeight-window.innerHeight)*100);e.style.width=i+"%",e.style.background=t},menu:function(){}},mounted:function(){this.scroll(),this.moveBar()}},f=c,p=(i("2082"),i("2877")),u=Object(p["a"])(f,s,l,!1,null,"23529e0a",null),d=u.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("h1",[t._v(t._s(t.title))]),t._m(0)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#voting"}},[a("img",{attrs:{src:i("4c4a")}})])}],g={data:function(){return{title:"中二補選"}}},h=g,b=(i("740a"),Object(p["a"])(h,v,_,!1,null,"7a8fe516",null)),m=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"video"}},[i("h3",[t._v(t._s(t.title))]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-box"},[i("div",{staticClass:"iframe-container"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/XGEmg3vhrzU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}],x={data:function(){return{title:"直播專區"}}},C=x,k=(i("aa91"),Object(p["a"])(C,w,y,!1,null,"48da98be",null)),P=k.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"result"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"infogram-embed",attrs:{"data-id":"135ae998-7e35-4c67-a012-8eac86d3d7ac","data-type":"interactive","data-title":"中二補選 - 歷年投票"}}),i("div",{staticStyle:{padding:"8px 0","font-family":"Arial !important","font-size":"13px !important","line-height":"15px !important","text-align":"center","border-top":"1px solid #dadada",margin:"0 30px"}})])},E=[],A={name:"Result",data:function(){return{title:"歷年選舉"}}},O=A,T=Object(p["a"])(O,j,E,!1,null,"4034e8fb",null),$=T.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"profile"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"section-box"},[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"張烱春"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[0].no))])]),i("div",[t._v(" "+t._s(t.getProfile[0].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[0].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[0].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[0].experience.edu,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[0].experience.exp,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{staticClass:"opinion",attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[0].opinion.opin,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[0].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[0].property.prop,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"林金連"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[1].no))])]),i("div",[t._v(" "+t._s(t.getProfile[1].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[1].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[1].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[1].experience.edu,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[1].experience.exp,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{staticClass:"opinion",attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[1].opinion.opin,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[1].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[1].property.prop,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"李昇翰"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[2].no))])]),i("div",[t._v(" "+t._s(t.getProfile[2].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[2].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[2].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[2].experience.edu,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[2].experience.exp,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{staticClass:"opinion",attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[2].opinion.opin,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[2].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[2].property.prop,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"林靜儀",active:""}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[3].no))])]),i("div",[t._v(" "+t._s(t.getProfile[3].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[3].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[3].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[3].experience.edu,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[3].experience.exp,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{staticClass:"opinion",attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[3].opinion.opin,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[3].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[3].property.prop,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"顏寬恒"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[4].no))])]),i("div",[t._v(" "+t._s(t.getProfile[4].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[4].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[4].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[4].experience.edu,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[4].experience.exp,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{staticClass:"opinion",attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[4].opinion.opin,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[4].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[4].property.prop,(function(e,a){return i("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])])],1)],1)])},I=[],N={data:function(){return{title:"候選人介紹"}},computed:{getProfile:function(){return this.$store.state.guys}}},M=N,z=(i("edb9"),Object(p["a"])(M,S,I,!1,null,"7bb18bc2",null)),D=z.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"porcess"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"section-box"},[i("div",[i("ul",t._l(t.list,(function(e,a){return i("li",{key:a},[i("span",[t._v(t._s(t.list[a].date))]),i("p",[t._v(t._s(t.list[a].project))])])})),0)])])])},q=[],B={data:function(){return{title:"補選程序",list:[{date:"2021.12.8",project:"候選人抽籤決定號次"},{date:"2021.12.20",project:"選舉人名冊編造完成"},{date:"2021.12.29",project:"公告候選人名單"},{date:"2021.12.30 - 2021.1.8",project:"辦理公辦政見發表會"},{date:"2022.1.5前",project:"公告選舉人人數"},{date:"2022.1.9",project:"投票、開票"},{date:"2022.1.14前",project:"審定當選人名單"},{date:"2022.1.14",project:"公告當選人名單"}]}}},H=B,G=(i("70aa"),Object(p["a"])(H,F,q,!1,null,"6f645523",null)),L=G.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"news"}},[i("h3",[t._v(t._s(t.title))]),i("ul",[i("li",{on:{click:t.getData_ftvNews}},[t._v("中二補選")]),i("li",{on:{click:t.getData_ftvNews1}},[t._v("顏寬恒")]),i("li",{on:{click:t.getData_ftvNews2}},[t._v("林靜儀")])]),i("div",{staticClass:"section-box"},[i("div",{staticClass:"news-layout"},t._l(t.newsInfo,(function(e,a){return i("div",{key:a,staticClass:"news"},[i("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+e.ID,target:"blank"}},[i("div",[i("img",{attrs:{src:e.Image,alt:"新聞封面照"}})]),i("div",[i("h2",{staticClass:"title"},[t._v(t._s(e.Title))])]),i("div",[i("p",[t._v(t._s(e.CreateDate))])])])])})),0),t._m(0)])])},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn_more"},[i("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/中二補選/",target:"blank"}},[t._v("更多新聞")])])}],W=(i("d3b7"),i("159b"),{data:function(){return{title:"最新新聞",newsInfo:[]}},methods:{getData_ftvNews:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=中二補選&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))},getData_ftvNews1:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=顏寬恒&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))},getData_ftvNews2:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=林靜儀&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},mounted:function(){this.getData_ftvNews()}}),J=W,Y=(i("15cd"),Object(p["a"])(J,V,U,!1,null,"0febf736",null)),R=Y.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("footer",[t._v("Copyright © 2021 民視新聞網路部 社群中心")])])}],Q={},Z=Q,tt=(i("696b"),Object(p["a"])(Z,X,K,!1,null,"2d74cb75",null)),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"addition"},[t._m(0),t._m(1),i("span",{attrs:{id:"social_link"},on:{click:t.getLocalUrl}})])},at=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/tai2area/",target:"_blank"}},[i("span",{attrs:{id:"social_line","data-href":"https://www.ftvnews.com.tw/topics/tai2area/"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Ftai2area%2F&src=sdkpreparse"}},[i("span",{attrs:{id:"social_facebook"}})])}],nt={methods:{getLocalUrl:function(){var t=document.createElement("input"),e=window.location.href+"?utm_source=3qpage&utm_medium=copybutton";document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("複製成功!")}}},rt=nt,ot=(i("1ae8"),Object(p["a"])(rt,it,at,!1,null,"e106dcb2",null)),st=ot.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fad fa-3x fa-angle-up",on:{click:t.scrollTop}})])},ct=[],ft={methods:{scrollTop:function(){console.log(1),window.scrollTo({top:0,behavior:"smooth"})}}},pt=ft,ut=(i("eb22"),Object(p["a"])(pt,lt,ct,!1,null,"84f2d3b2",null)),dt=ut.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("a",{attrs:{href:"#video"}},[t._v("直播專區")]),i("a",{attrs:{href:"#profile"}},[t._v("候選人介紹")]),i("a",{attrs:{href:"#news"}},[t._v("最新新聞")])])}],gt={},ht=gt,bt=(i("b6f2"),Object(p["a"])(ht,vt,_t,!1,null,null,null)),mt=bt.exports,wt={name:"App",components:{Header:d,COntentBanner:m,ContentVideo:P,InfogramVoted:$,ContentProfile:D,ContentProcess:L,ContentNews:R,Footer:et,AdditionSide:st,AdditionScrolltop:dt,AdditionBottom:mt}},yt=wt,xt=(i("034f"),i("b0a0"),Object(p["a"])(yt,r,o,!1,null,null,null)),Ct=xt.exports,kt=(i("ac1f"),i("5319"),i("25f0"),i("2f62"));a["default"].use(kt["a"]);var Pt=new kt["a"].Store({state:{guys:[{name:"張烱春",no:"1",party:"張烱春",photo:i("ce47"),party_photo:i("d22c"),experience:{edu:["台中師專"],exp:["台中市北屯仁和里長","台中市街頭藝人協會創會理事長","台中市兒童福利發展協會總幹事"]},opinion:{title:"政見",opin:["行政中立法／地方自治／財政畫分／選罷法／總統選舉法／公投／勞基法等等需修","國教立即短期內向下延伸","土地正義相關／國土規劃／都市計劃／農地全面檢討","司法／人權／轉型正義等修正","保障身心障礙家庭基本收入及照顧入法","遷建立法院台中先行","中火空污回饋補償擴大範圍更需向中央爭取，加速台中重大建設，如：沙鹿台中機場開發、海線鐵路高架雙軌、大肚生活圈古蹟人文、烏日高鐵區發展、霧峰台中捷運優先，形成環狀大台中等"]},property:{title:"財產申報",prop:[""],file:["https://www.ftvnews.com.tw/topics/tai2area/property/張烱春財申表.pdf"]}},{name:"林金連",no:"2",party:"林金連",photo:i("0efe"),party_photo:i("ff32"),experience:{edu:["光華高工","省立嘉義師專幼稚教育師資科","省立嘉義師專幼稚教育師資科","國立嘉義師範學院幼兒教育學系","國立嘉義大學幼兒教育研究所，幼教碩士"],exp:["台中黎明幼兒園園長","87年文建會地方記錄片首獎、考古研究、埔里石墩坑、南屯麻糍埔遺址發現","台灣省道教會理事","台灣土地正義行動聯盟常務理事","嘉義大學幼兒教育研究所甄試榜首","中華道教學院合格大法師認證"]},opinion:{title:"政見",opin:["身為土地迫遷受難者，看到台灣社會存在太多的不公不義、貪官污吏、官商勾結問題泛濫","我絕不是叛經離道的異議人士，只能更能苦民所苦，領悟太多不當之法需改革修正","唯有進駐立法院，才能真正擺除政黨包袱為小老百姓做事發聲"]},property:{title:"財產申報",prop:["土地4筆","建物5筆","汽車1筆"],file:["https://www.ftvnews.com.tw/topics/tai2area/property/林金連財申表.pdf"]}},{name:"李昇翰",no:"3 ",party:"李昇翰",photo:i("0aec"),party_photo:i("ff32"),experience:{edu:["國立高雄海洋科技大學學士"],exp:["某科大第一屆學生會會長","某社區第三屆主任委員","某社福基金會第八屆體驗活動總召"]},opinion:{title:"政見",opin:["承襲爺爺熱心公益的從政理念","無黨無派、無依無靠、沒有背台、沒有立場","青年首購107年遷進沙鹿，成家三年5626","中二區只選剩餘這屆，兩年期滿「約翰走路」","有很多特別的主題，想發表1986的時代心聲","督促自己半年內熟悉立院事務，請各方前輩給我機會","當選設一個主要辦事處，以全台的眼光看地方的發展定位","支持立法院遷中部","重視空港整體性建設，爭取航站員工專用停車場","取消疫調實聯名制，維護民眾個資安全，減少商家營業負擔"]},property:{title:"財產申報",prop:["土地1筆","建物1筆","汽車1筆","保險3筆 84萬9200元","股票 3萬元","存款 87萬3190元","債務 532萬6852元"],file:["https://www.ftvnews.com.tw/topics/tai2area/property/李昇翰財申表.pdf"]}},{name:"林靜儀",no:"4",party:"林靜儀",photo:i("a919"),party_photo:i("e267"),experience:{edu:["台大分子醫學研究所碩士","中山醫學大學醫學研究所碩士","中山醫學大學醫學研究所博士"],exp:["第9屆立法委員","民進黨中央黨部婦女發展部主任","中山醫大附設醫院產科主任","行政院婦權會委員"]},opinion:{title:"政見",opin:["照顧長幼全方位：長照2.0 社區服務最佳化，完善幼托資源照顧更有力","能源轉型穩健推：增氣減煤機組更新少碳排，空汙防治監測品質更進化","大眾運輸要起飛：山海環線鐵路雙軌高架化，捷運路網建置規劃更全面","交通建設助安行：聯外運輸便捷友善促觀光，道路品質翻新交通更安心","產業升級不能停：在地產業體質更新重永續，優質農產行銷輔導有效率","本地文化永傳承：區域閒置空間古蹟再利用，連結歷史藝文活動新感動","教育環境再提升：校舍整建設施改善要健全，學童學習活動空間更安全","休息遊憩更便利：建構生態及河濱親水公園，觀光景點規劃發展更落地","基礎建設續完善：自來水管線汰換延管加速，極端氣候永續能源來因應","強身健體有處去：爭取全民運動空間廣設置，普及運動習慣世代更健康"]},property:{title:"財產申報",prop:["土地3筆","建物3筆","汽車1筆","保險4筆 285萬7457元","存款 172萬0389元","債務 491萬9800元"],file:["https://www.ftvnews.com.tw/topics/tai2area/property/林靜儀財申表.pdf"]}},{name:"顏寬恒",no:"5",party:"顏寬恒",photo:i("6e32"),party_photo:i("e766"),experience:{edu:["建國工專機械工程科","美國舊金山多明尼肯大學企管碩士","中華大學行政管理研究所碩士"],exp:["第8、9屆立法委員","台中市救國團團委會指導委員","大甲鎮瀾宮兒童家園志工","台中市後備指揮部發展委員","台中市新移民女性家庭關懷協會顧問","台中市沙鹿中正獅子會2016-2017會長","中華民國法警協會榮譽理事長","社團法人台中市學前教育協會顧問"]},opinion:{title:"政見",opin:["監督衛福部接種受害救濟審議小組，對於因疫苗預防接種受害請求救濟者，應盡速審議確定後予以救濟補償","檢討我國食安政策，針對含有萊克多巴胺等有害藥劑之豬肉，加強源頭管制嚴格把關及標示義務","監督中央與地方政府合力，加強大型汙染源管制，擴大鼓勵高汙染車輛及鍋爐汰換，改善中部地區空汙問題：堅持台中發電廠新建燃氣機組，必須除役並拆除等量之燃煤機組，絕不讓中火成為世界最大火力發電廠","加速爭取海線鐵路雙軌化以及大慶至烏日段高架化建設，增加海線鐵道班次，活絡交通、平衡區域發展","持續監督台中大肚與彰化銜接之和美大橋工程進度，縮短兩地交通時間，紓解目前周邊道路尖峰時間壅塞問題","全力爭取台中生活圈四號道路線延伸開闢工程，補足大肚、龍井區域聯外道路，完成大台中交通環狀線。","提升台中港與台中國際機場運量，監督行政部門加速台中國際機場升級完工，滿足出入境需求。","督促行政部門加速台中捷運藍線、綠線延伸線盡速動工，爭取藍線向南延伸至霧峰段盡速定案，以因應沿線人口快速成長及霧峰區內兩所大學之大眾交通問題。","延續任內推動建設，持續監督南山截水溝工程，全面改善龍井、沙鹿地區淹水問題。","針對區域老舊自來水管線，進行汰換以降低漏水率，並持續提升自來水普及率，增設偏遠地區之自來水管線。","爭取青年創業基地，擴大青年創業及就業補助，加強配套措施，鼓勵青年返鄉就業、創業。","檢討我國嬰幼兒收托政策，減輕家長負擔、提升嬰幼兒托育及園所營運品質，照顧孩子同時兼顧幼保人員權益。","因應人口高齡化加強長照政策，活化老年人口、提升長照品質，滿足失能、失智人口增加所衍生之長照需求，減輕子女負擔。","配合十二年國民基本教育，爭取新設高中，讓在地學子免於舟車勞頓，提升教育質量。","擴大勞工就業職能、技能輔導，包括創業、就業、轉型，放寬創業貸款審查，加速投入職場。","加強農漁牧業產銷輔導，穩定市場價格；推動農漁牧業轉型升級，加強農漁牧行銷策略，吸引在地青年投入","爭取中央預算，針對在地商圈加強行銷特色商圈與商圈活化，吸引外地觀光人潮、帶動區域發展。"]},property:{title:"財產申報",prop:["土地62筆","建物10筆","汽車1筆","保險27筆","股票 1384萬6760元","存款 2705萬9790元","債務 7422萬1077元","事業投資 1800萬元"],file:["https://www.ftvnews.com.tw/topics/tai2area/property/顏寬恒財申表.pdf"]}}],vote_personal:[{no:1,valid_vote:0,percent:0,elected:!1},{no:2,valid_vote:0,percent:0,elected:!1},{no:3,valid_vote:0,percent:0,elected:!1},{no:4,valid_vote:0,percent:0,elected:!0},{no:5,valid_vote:0,percent:0,elected:!1}],vote_total:12e4},mutations:{votes:function(t){axios.get("https://ftvnews.com.tw/topics/tai2area/poll220109.json").then((function(e){for(var i=e.data.Data,a=i[0].AgreeTickets+i[1].AgreeTickets+i[2].AgreeTickets+i[3].AgreeTickets+i[4].AgreeTickets,n=0;n<t.guys.length;n++){var r=i[n].AgreeTickets/t.vote_total*100;document.querySelectorAll(".percent")[n].innerHTML=Math.floor(i[n].AgreeTickets/a*100),i[n].AgreeTickets>=12e4?document.querySelectorAll(".vote_progress")[n].style.width="100%":document.querySelectorAll(".vote_progress")[n].style.width=r+"%",t.vote_personal[n].valid_vote=i[n].AgreeTickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g,"萬")}})).catch((function(t){console.log(t)}))}},actions:{},modules:{}});a["default"].config.productionTip=!1,new a["default"]({store:Pt,render:function(t){return t(Ct)}}).$mount("#app")},"5cec":function(t,e,i){},"5d62":function(t,e,i){},"5ddd":function(t,e,i){},"696b":function(t,e,i){"use strict";i("a78a")},"6e32":function(t,e,i){t.exports=i.p+"img/顏寬恒.cfa8d6a2.png"},"70aa":function(t,e,i){"use strict";i("3b29")},"740a":function(t,e,i){"use strict";i("cddf")},"74e5":function(t,e,i){},7624:function(t,e,i){},"85ec":function(t,e,i){},a78a:function(t,e,i){},a919:function(t,e,i){t.exports=i.p+"img/林靜儀.9bed62d2.png"},aa91:function(t,e,i){"use strict";i("5cec")},add4:function(t,e,i){},b0a0:function(t,e,i){"use strict";i("452c")},b6f2:function(t,e,i){"use strict";i("5d62")},cddf:function(t,e,i){},ce47:function(t,e,i){t.exports=i.p+"img/張烱春.f5798222.png"},d22c:function(t,e,i){t.exports=i.p+"img/台灣股票黨.85957539.png"},e267:function(t,e,i){t.exports=i.p+"img/民進黨.16a89027.png"},e766:function(t,e,i){t.exports=i.p+"img/國民黨.b07bc070.png"},eb22:function(t,e,i){"use strict";i("5ddd")},edb9:function(t,e,i){"use strict";i("7624")},ff32:function(t,e,i){t.exports=i.p+"img/無黨籍.15b252bb.png"}});
//# sourceMappingURL=app.1640856626916.js.map