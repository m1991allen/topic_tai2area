(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var f=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"0aec":function(t,e,i){t.exports=i.p+"img/李昇翰.ef976f4e.png"},"0d78":function(t,e,i){},"0efe":function(t,e,i){t.exports=i.p+"img/林金連.b5c4ea12.png"},1854:function(t,e,i){},2082:function(t,e,i){"use strict";i("0d78")},"3b29":function(t,e,i){},"452c":function(t,e,i){},"4c4a":function(t,e,i){t.exports=i.p+"img/banner.1675c502.jpg"},5367:function(t,e,i){"use strict";i("d963")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("e792"),i("0cdd");var n=i("2b0e"),a=i("5f5b");i("ab8b"),i("2dd8");n["default"].use(a["a"]);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("COntentBanner"),i("ContentVoting"),i("InfogramResult"),i("ContentProfile"),i("ContentProcess"),i("InfogramVoted"),i("ContentVideo"),i("ContentNews"),i("Footer"),i("AdditionSide"),i("AdditionScrolltop"),i("AdditionBottom")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"progress"}),i("div",{staticClass:"flex-logo"},[i("i",{staticClass:"fad fa-2x fa-list",on:{click:t.menu}},[i("nav",{staticClass:"nav"},t._l(t.list,(function(e,n){return i("a",{key:n,attrs:{href:e.anchor}},[t._v(" "+t._s(e.title)+" ")])})),0)])])])},l=[],c={data:function(){return{list:[{title:"直播專區",anchor:"#video"},{title:"候選人介紹",anchor:"#profile"},{title:"補選程序",anchor:"#porcess"},{title:"最新新聞",anchor:"#news"}]}},methods:{scroll:function(){var t=this;window.addEventListener("scroll",(function(){t.moveBar("#374674")}))},moveBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#0984e3",e=document.querySelector(".progress"),i=Math.ceil(Math.round(window.pageYOffset)/(document.body.scrollHeight-window.innerHeight)*100);e.style.width=i+"%",e.style.background=t},menu:function(){}},mounted:function(){this.scroll(),this.moveBar()}},f=c,p=(i("2082"),i("2877")),u=Object(p["a"])(f,o,l,!1,null,"23529e0a",null),d=u.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("h1",[t._v(t._s(t.title))]),t._m(0)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#voting"}},[n("img",{attrs:{src:i("4c4a")}})])}],g={data:function(){return{title:"中二補選"}}},h=g,b=(i("740a"),Object(p["a"])(h,v,_,!1,null,"7a8fe516",null)),m=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"video"}},[i("h3",[t._v(t._s(t.title))]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-box"},[i("div",{staticClass:"iframe-container"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/XGEmg3vhrzU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}],x={data:function(){return{title:"直播專區"}}},C=x,k=(i("aa91"),Object(p["a"])(C,w,y,!1,null,"48da98be",null)),P=k.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"voting"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"section-box"},t._l(t.getProfile,(function(e,n){return i("div",{key:n,staticClass:"vote_info",class:{selected:t.getVotes[n].elected}},[i("h4",[i("div",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(e.no))])]),i("span",[t._v(t._s(e.party))]),i("img",{attrs:{src:t.getProfile[n].party_photo,alt:"政黨"}}),i("span",{class:{elected:t.getVotes[n].elected}})]),i("div",{staticClass:"vote_layout"},[i("span",{staticClass:"votes"},[t._v(t._s(t.getVotes[n].valid_vote))]),t._v(" "),i("span",[t._v(" 票")]),i("span",{staticClass:"percent"},[t._v(t._s(t.getVotes[n].percent))])])]),t._m(0,!0),i("hr")])})),0)])},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vote_bar"},[i("span",{staticClass:"vote_progress"})])}],O={data:function(){return{title:"開票區"}},methods:{keepGetVotes:function(){var t=this;setInterval((function(){t.$store.commit("votes")}),1500)}},computed:{getProfile:function(){return this.$store.state.guys},getVotes:function(){return this.$store.state.vote_personal}},mounted:function(){this.$store.commit("votes"),this.keepGetVotes()}},$=O,A=(i("6ab6"),Object(p["a"])($,j,E,!1,null,"0ae5a143",null)),T=A.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"profile"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"section-box"},[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"張烱春"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[0].no))])]),i("div",[t._v(" "+t._s(t.getProfile[0].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[0].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[0].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[0].experience.edu,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[0].experience.exp,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[0].opinion.opin,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[0].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[0].property.prop,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"林金連"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[1].no))])]),i("div",[t._v(" "+t._s(t.getProfile[1].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[1].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[1].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[1].experience.edu,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[1].experience.exp,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[1].opinion.opin,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[1].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[1].property.prop,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"李昇翰"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[2].no))])]),i("div",[t._v(" "+t._s(t.getProfile[2].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[2].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[2].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[2].experience.edu,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[2].experience.exp,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[2].opinion.opin,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[2].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[2].property.prop,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"林靜儀",active:""}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[3].no))])]),i("div",[t._v(" "+t._s(t.getProfile[3].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[3].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[3].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[3].experience.edu,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[3].experience.exp,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[3].opinion.opin,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[3].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[3].property.prop,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])]),i("b-tab",{attrs:{title:"顏寬恒"}},[i("div",{staticClass:"grid"},[i("div",[i("h4",[i("span",{staticClass:"fa-stack"},[i("span",{staticClass:"fa fa-circle-o fa-stack-2x"}),i("strong",{staticClass:"fa-stack-1x"},[t._v(" "+t._s(t.getProfile[4].no))])]),i("div",[t._v(" "+t._s(t.getProfile[4].party)+" ")])]),i("div",[i("img",{attrs:{src:t.getProfile[4].photo,loading:"lazy"}}),i("img",{attrs:{src:t.getProfile[4].party_photo,alt:"政黨"}})])]),i("div",[i("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[i("b-tab",{attrs:{title:"經歷",active:""}},[i("p",[t._v("學歷")]),i("ul",t._l(t.getProfile[4].experience.edu,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("hr"),i("p",[t._v("經歷")]),i("ul",t._l(t.getProfile[4].experience.exp,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"政見"}},[i("ul",t._l(t.getProfile[4].opinion.opin,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-tab",{attrs:{title:"財產申報"}},[i("div",{staticClass:"grid-inner"},[i("a",{attrs:{href:t.getProfile[4].property.file,target:"_blank"}},[i("i",{staticClass:"fad fa-lg fa-file-download"}),t._v("_財產申報資料")]),i("ul",t._l(t.getProfile[4].property.prop,(function(e,n){return i("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])],1)],1)])])],1)],1)])},V=[],I={data:function(){return{title:"候選人介紹"}},computed:{getProfile:function(){return this.$store.state.guys}}},N=I,M=(i("5367"),Object(p["a"])(N,S,V,!1,null,"928d5da6",null)),z=M.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"porcess"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"section-box"},[i("div",[i("ul",t._l(t.list,(function(e,n){return i("li",{key:n},[i("span",[t._v(t._s(t.list[n].date))]),i("p",[t._v(t._s(t.list[n].project))])])})),0)])])])},F=[],q={data:function(){return{title:"補選程序",list:[{date:"2021.12.8",project:"候選人抽籤決定號次"},{date:"2021.12.20",project:"選舉人名冊編造完成"},{date:"2021.12.29",project:"公告候選人名單"},{date:"2021.12.30 - 2021.1.8",project:"辦理公辦政見發表會"},{date:"2022.1.5前",project:"公告選舉人人數"},{date:"2022.1.9",project:"投票、開票"},{date:"2022.1.14前",project:"審定當選人名單"},{date:"2022.1.14",project:"公告當選人名單"}]}}},B=q,G=(i("70aa"),Object(p["a"])(B,D,F,!1,null,"6f645523",null)),H=G.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"result"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"infogram-embed",attrs:{"data-id":"0cc1b8f5-0f9c-44f7-8f84-75f71e8ef602","data-type":"interactive","data-title":"中二補選-投票結果"}})])},R=[],U={name:"Result",data:function(){return{title:"開票結果"}}},W=U,J=Object(p["a"])(W,L,R,!1,null,"415c2000",null),Y=J.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"result"}},[i("h3",[t._v(t._s(t.title))]),i("div",{staticClass:"infogram-embed",attrs:{"data-id":"135ae998-7e35-4c67-a012-8eac86d3d7ac","data-type":"interactive","data-title":"中二補選 - 歷年投票"}}),i("div",{staticStyle:{padding:"8px 0","font-family":"Arial !important","font-size":"13px !important","line-height":"15px !important","text-align":"center","border-top":"1px solid #dadada",margin:"0 30px"}})])},K=[],Q={name:"Result",data:function(){return{title:"歷年選舉"}}},Z=Q,tt=Object(p["a"])(Z,X,K,!1,null,"4034e8fb",null),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"news"}},[i("h3",[t._v(t._s(t.title))]),i("ul",[i("li",{on:{click:t.getData_ftvNews}},[t._v("中二補選")]),i("li",{on:{click:t.getData_ftvNews1}},[t._v("顏寬恒")]),i("li",{on:{click:t.getData_ftvNews2}},[t._v("林靜儀")])]),i("div",{staticClass:"section-box"},[i("div",{staticClass:"news-layout"},t._l(t.newsInfo,(function(e,n){return i("div",{key:n,staticClass:"news"},[i("a",{attrs:{href:"https://www.ftvnews.com.tw/news/detail/"+e.ID,target:"blank"}},[i("div",[i("img",{attrs:{src:e.Image,alt:"新聞封面照"}})]),i("div",[i("h2",{staticClass:"title"},[t._v(t._s(e.Title))])]),i("div",[i("p",[t._v(t._s(e.CreateDate))])])])])})),0),t._m(0)])])},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn_more"},[i("a",{attrs:{href:"https://www.ftvnews.com.tw/tag/中二補選/",target:"blank"}},[t._v("更多新聞")])])}],at=(i("d3b7"),i("159b"),{data:function(){return{title:"最新新聞",newsInfo:[]}},methods:{getData_ftvNews:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=中二補選&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))},getData_ftvNews1:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=顏寬恒&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))},getData_ftvNews2:function(){var t=this;document.querySelectorAll(".news").forEach((function(t){return t.remove()})),axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=林靜儀&Page=1&sp=3").then((function(e){var i=e.data.ITEM;i.forEach((function(e){t.newsInfo.push(e)}))})).catch((function(t){console.log("error"+t)}))}},mounted:function(){this.getData_ftvNews()}}),rt=at,st=(i("e2b2"),Object(p["a"])(rt,it,nt,!1,null,"7104f7b0",null)),ot=st.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("footer",[t._v("Copyright © 2021 民視新聞網路部 社群中心")])])}],ft={},pt=ft,ut=(i("696b"),Object(p["a"])(pt,lt,ct,!1,null,"2d74cb75",null)),dt=ut.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"addition"},[t._m(0),t._m(1),i("span",{attrs:{id:"social_link"},on:{click:t.getLocalUrl}})])},_t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/taichillvote/",target:"_blank"}},[i("span",{attrs:{id:"social_line","data-href":"https://www.ftvnews.com.tw/topics/taichillvote/"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Ftaichillvote%2F&src=sdkpreparse"}},[i("span",{attrs:{id:"social_facebook"}})])}],gt={methods:{getLocalUrl:function(){var t=document.createElement("input"),e=window.location.href+"?utm_source=3qpage&utm_medium=copybutton";document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("複製成功!")}}},ht=gt,bt=(i("7c77"),Object(p["a"])(ht,vt,_t,!1,null,"cfc77250",null)),mt=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fad fa-3x fa-angle-up",on:{click:t.scrollTop}})])},yt=[],xt={methods:{scrollTop:function(){console.log(1),window.scrollTo({top:0,behavior:"smooth"})}}},Ct=xt,kt=(i("eb22"),Object(p["a"])(Ct,wt,yt,!1,null,"84f2d3b2",null)),Pt=kt.exports,jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("a",{attrs:{href:"#video"}},[t._v("直播專區")]),i("a",{attrs:{href:"#profile"}},[t._v("候選人介紹")]),i("a",{attrs:{href:"#news"}},[t._v("最新新聞")])])}],Ot={},$t=Ot,At=(i("b6f2"),Object(p["a"])($t,jt,Et,!1,null,null,null)),Tt=At.exports,St={name:"App",components:{Header:d,COntentBanner:m,ContentVideo:P,ContentVoting:T,ContentProfile:z,ContentProcess:H,InfogramResult:Y,InfogramVoted:et,ContentNews:ot,Footer:dt,AdditionSide:mt,AdditionScrolltop:Pt,AdditionBottom:Tt}},Vt=St,It=(i("034f"),i("b0a0"),Object(p["a"])(Vt,r,s,!1,null,null,null)),Nt=It.exports,Mt=(i("ac1f"),i("5319"),i("25f0"),i("2f62"));n["default"].use(Mt["a"]);var zt=new Mt["a"].Store({state:{guys:[{name:"張烱春",no:"1",party:"張烱春",photo:i("ce47"),party_photo:i("d22c"),experience:{edu:["台中師專"],exp:["台中市北屯仁和里長","台中市街頭藝人協會創會理事長","台中市兒童福利發展協會總幹事"]},opinion:{title:"政見",opin:[""]},property:{title:"財產申報",prop:[""],file:["https://www.ftvnews.com.tw/topics/taichillVote/property/張烱春財申表.pdf"]}},{name:"林金連",no:"2",party:"林金連",photo:i("0efe"),party_photo:i("ff32"),experience:{edu:["光華高工","省立嘉義師專幼稚教育師資科","省立嘉義師專幼稚教育師資科","國立嘉義師範學院幼兒教育學系","國立嘉義大學幼兒教育研究所，幼教碩士"],exp:["台中黎明幼兒園園長","87年文建會地方記錄片首獎、考古研究、埔里石墩坑、南屯麻糍埔遺址發現","台灣省道教會理事","台灣土地正義行動聯盟常務理事","嘉義大學幼兒教育研究所甄試榜首","中華道教學院合格大法師認證"]},opinion:{title:"政見",opin:[""]},property:{title:"財產申報",prop:["土地4筆","建物5筆","汽車1筆"],file:["https://www.ftvnews.com.tw/topics/taichillVote/property/林金連財申表.pdf"]}},{name:"李昇翰",no:"3 ",party:"李昇翰",photo:i("0aec"),party_photo:i("ff32"),experience:{edu:[""],exp:[]},opinion:{title:"政見",opin:[""]},property:{title:"財產申報",prop:["土地1筆","建物1筆","汽車1筆","保險3筆 84萬9200元","股票 3萬元","存款 87萬3190元","債務 532萬6852元"],file:["https://www.ftvnews.com.tw/topics/taichillVote/property/李昇翰財申表.pdf"]}},{name:"林靜儀",no:"4",party:"林靜儀",photo:i("a919"),party_photo:i("e267"),experience:{edu:["台大分子醫學研究所碩士","中山醫學大學醫學研究所碩士","中山醫學大學醫學研究所博士"],exp:["第9屆立法委員","民進黨中央黨部婦女發展部主任","中山醫大附設醫院產科主任","行政院婦權會委員"]},opinion:{title:"政見",opin:[""]},property:{title:"財產申報",prop:["土地3筆","建物3筆","汽車1筆","保險4筆 285萬7457元","存款 172萬0389元","債務 491萬9800元"],file:["https://www.ftvnews.com.tw/topics/taichillVote/property/林靜儀財申表.pdf"]}},{name:"顏寬恒",no:"5",party:"顏寬恒",photo:i("6e32"),party_photo:i("e766"),experience:{edu:["建國工專機械工程科","美國舊金山多明尼肯大學企管碩士","中華大學行政管理研究所碩士"],exp:["第8、9屆立法委員","台中市救國團團委會指導委員","大甲鎮瀾宮兒童家園志工","台中市後備指揮部發展委員","台中市新移民女性家庭關懷協會顧問","台中市沙鹿中正獅子會2016-2017會長","中華民國法警協會榮譽理事長","社團法人台中市學前教育協會顧問"]},opinion:{title:"政見",opin:[""]},property:{title:"財產申報",prop:["土地62筆","建物10筆","汽車1筆","保險27筆","股票 1384萬6760元","存款 2705萬9790元","債務 7422萬1077元","事業投資 1800萬元"],file:["https://www.ftvnews.com.tw/topics/taichillVote/property/顏寬恒財申表.pdf"]}}],vote_personal:[{no:1,valid_vote:0,percent:0,elected:!1},{no:2,valid_vote:0,percent:0,elected:!1},{no:3,valid_vote:0,percent:0,elected:!1},{no:4,valid_vote:0,percent:0,elected:!0},{no:5,valid_vote:0,percent:0,elected:!1}],vote_total:12e4},mutations:{votes:function(t){axios.get("https://ftvnews.com.tw/topics/taichillVote/poll220109.json").then((function(e){for(var i=e.data.Data,n=i[0].AgreeTickets+i[1].AgreeTickets+i[2].AgreeTickets+i[3].AgreeTickets+i[4].AgreeTickets,a=0;a<t.guys.length;a++){var r=i[a].AgreeTickets/t.vote_total*100;document.querySelectorAll(".percent")[a].innerHTML=Math.floor(i[a].AgreeTickets/n*100),i[a].AgreeTickets>=12e4?document.querySelectorAll(".vote_progress")[a].style.width="100%":document.querySelectorAll(".vote_progress")[a].style.width=r+"%",t.vote_personal[a].valid_vote=i[a].AgreeTickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g,"萬")}})).catch((function(t){console.log(t)}))}},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({store:zt,render:function(t){return t(Nt)}}).$mount("#app")},"5cec":function(t,e,i){},"5d62":function(t,e,i){},"5ddd":function(t,e,i){},"62df":function(t,e,i){},"696b":function(t,e,i){"use strict";i("a78a")},"6ab6":function(t,e,i){"use strict";i("89e0")},"6e32":function(t,e,i){t.exports=i.p+"img/顏寬恒.13bfbaa5.png"},"70aa":function(t,e,i){"use strict";i("3b29")},"740a":function(t,e,i){"use strict";i("cddf")},"7c77":function(t,e,i){"use strict";i("62df")},"85ec":function(t,e,i){},"89e0":function(t,e,i){},a78a:function(t,e,i){},a919:function(t,e,i){t.exports=i.p+"img/林靜儀.b272bee8.png"},aa91:function(t,e,i){"use strict";i("5cec")},b0a0:function(t,e,i){"use strict";i("452c")},b6f2:function(t,e,i){"use strict";i("5d62")},cddf:function(t,e,i){},ce47:function(t,e,i){t.exports=i.p+"img/張烱春.a9eb7521.png"},d22c:function(t,e,i){t.exports=i.p+"img/台灣股票黨.85957539.png"},d963:function(t,e,i){},e267:function(t,e,i){t.exports=i.p+"img/民進黨.16a89027.png"},e2b2:function(t,e,i){"use strict";i("1854")},e766:function(t,e,i){t.exports=i.p+"img/國民黨.b07bc070.png"},eb22:function(t,e,i){"use strict";i("5ddd")},ff32:function(t,e,i){t.exports=i.p+"img/無黨籍.15b252bb.png"}});
//# sourceMappingURL=app.1640243807053.js.map