webpackJsonp([7],{545:function(t,e,r){r(581);var s=r(8)(r(563),r(593),null,null);t.exports=s.exports},563:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(54),o=r.n(s),a=r(194),c=r.n(a),i=r(195),h=r.n(i),n=r(63),l=r.n(n),u=r(192),p=r.n(u),f=r(197),x=r.n(f),y=r(189),d=r(62),v=r(81),m=r(45);e.default={mixins:[v.c,v.b],data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},created:function(){this._getHotKey()},methods:o()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh(),this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;r.i(y.b)().then(function(e){e.code===d.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},r.i(m.c)(["clearSearchHistory"])),watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},components:{SearchBox:c.a,SearchList:h.a,Scroll:l.a,Confirm:p.a,Suggest:x.a}}},571:function(t,e,r){e=t.exports=r(540)(!1),e.push([t.i,'.search .search-box-wrapper{margin:20px}.search .shortcut-wrapper{position:fixed;top:178px;bottom:0;width:100%}.search .shortcut-wrapper .shortcut{height:100%;overflow:hidden}.search .shortcut-wrapper .shortcut .hot-key{margin:0 20px 20px}.search .shortcut-wrapper .shortcut .hot-key .title{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .hot-key .item{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.search .shortcut-wrapper .shortcut .search-history{position:relative;margin:0 20px}.search .shortcut-wrapper .shortcut .search-history .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .search-history .title .text{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .shortcut-wrapper .shortcut .search-history .title .clear{position:relative}.search .shortcut-wrapper .shortcut .search-history .title .clear:before{content:"";position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px}.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear{font-size:14px;color:hsla(0,0%,100%,.3)}.search .search-result{position:fixed;width:100%;top:178px;bottom:0}',""])},581:function(t,e,r){var s=r(571);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(541)("5b7a082a",s,!0)},593:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("search-list",{attrs:{searches:t.searchHistory},on:{delete:t.deleteSearchHistory,select:t.addQuery}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),r("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},staticRenderFns:[]}}});