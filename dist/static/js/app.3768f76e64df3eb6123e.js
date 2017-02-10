webpackJsonp([1,0],[function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(37),a=i(n),o=s(20),r=i(o),l=s(36),c=i(l),d=s(35),u=i(d),f=s(21),p=i(f),h=s(24),v=i(h),C=s(23),m=i(C);s(11),a.default.use(c.default),a.default.use(u.default);var y=[{path:"/goods",component:p.default},{path:"/seller",component:v.default},{path:"/ratings",component:m.default}],w=new c.default({routes:y});new a.default({el:"#app",router:w,render:function(t){return t(r.default)}}),w.push("goods")},,function(t,e,s){var i,n;s(12),i=s(4);var a=s(27);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(22),a=i(n),o=0;e.default={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(e){e=e.body,e.errno===o&&(t.seller=e.data)},function(t){})},components:{"v-header":a.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("add-cart",t.target))},deCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=i(n),o=s(25),r=i(o),l=s(2),c=i(l),d=0;e.default={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0}},created:function(){var t=this;this.$http.get("/api/goods").then(function(e){e=e.body,e.errno===d&&(t.goods=e.data,t.$nextTick(function(){this._initBscroll(),this.calcHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"],this.$on("add-cart",this._drop)},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],s=this.listHeight[t+1];if(!s||this.scrollY>=e&&this.scrollY<s)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(e){e.foods.forEach(function(e){e.count&&t.push(e)})}),t}},beforeDestroy:function(){this.$off("add-cart",this._drop)},methods:{selectMenu:function(t,e){if(e._constructed){var s=this.$refs.foodsWrapper.getElementsByClassName("foods-list-hook"),i=s[t];this.foodsBscroll.scrollToElement(i,300)}},_initBscroll:function(){var t=this;this.menuBscroll=new a.default(this.$refs.menuWrapper,{click:!0,cancelable:!0}),this.foodsBscroll=new a.default(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsBscroll.on("scroll",function(e){t.scrollY=Math.abs(Math.round(e.y))})},calcHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("foods-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var i=t[s];e+=i.clientHeight,this.listHeight.push(e)}},_drop:function(t){this.$nextTick(function(){this.$refs.shopcart.drop(t)})}},components:{shopcart:r.default,cartcontrol:c.default}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(26),a=i(n);e.default={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},closeDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{start:a.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=i(n),o=s(2),r=i(o);e.default={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1,flod:!0}},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.price*e.count}),console.log(this),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.count}),t},payDesc:function(){if(0===this.totalPrice)return"¥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差¥"+t+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){if(!this.totalCount)return this.flod=!0,!1;var t=!this.flod;return t&&this.$nextTick(function(){this.scroll?this.scroll.refresh():this.scroll=new a.default(this.$refs.listContent,{click:!0})}),t}},methods:{drop:function(t){var e=this,s=0;this.$on("add-cart",function(t){e.$nextTick(function(){for(;s<this.balls.length;)s++,s>=this.balls.length&&(s=0);var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)})})},beforeEnter:function(t){console.log("beforeEnter");for(var e=this.balls.length;e--;){var s=this.balls[e];if(s.show){var i=s.el.getBoundingClientRect(),n=i.left-32,a=-(window.innerHeight-i.top-22);t.style.display="",t.style.transform="translate3d(0, "+a+"px, 0)",t.style.webkitTransform="translate3d(0, "+a+"px, 0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.transform="translate3d("+n+"px, 0, 0)",o.style.webkitTransform="translate3d("+n+"px, 0, 0)"}}},enter:function(t,e){console.log("enter");t.offsetHeight;this.$nextTick(function(){setTimeout(function(){t.style.transform="translate3d(0, 0, 0)",t.style.webkitTransform="translate3d(0, 0, 0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.transform="translate3d(0, 0, 0)",e.style.webkitTransform="translate3d(0, 0, 0)"})}),e()},afterEnter:function(t){console.log("afterEnter");var e=this.dropBalls.shift();e&&(e.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.flod=!this.flod)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})}},components:{cartcontrol:r.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="on",i="half",n="off",a=5;e.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,o=e%1!==0,r=Math.floor(e),l=0;l<r;l++)t.push(s);for(o&&t.push(i);t.length<a;)t.push(n);return t}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){var i,n;s(14),i=s(3);var a=s(29);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(16),i=s(5);var a=s(31);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(18),i=s(6);var a=s(33);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(15),i=s(7);var a=s(30);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(19),i=s(8);var a=s(34);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(17),i=s(9);var a=s(32);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(13),i=s(10);var a=s(28);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(e){t.deCart(e)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])])," ",e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count "},[t._s(t.food.count)])," ",e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(e){t.addCart(e)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"star",class:t.starType},[t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t})})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}})," ",e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},["商品"])])," ",e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},["评价"])])," ",e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},["商家"])])])," ",e("router-view",{attrs:{seller:t.seller}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",["\nwo shi ratings  \n"])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",[t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(e){t.selectMenu(i,e)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._s(s.name)])])})])])," ",e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",[t._l(t.goods,function(s){return e("li",{staticClass:"foods-list foods-list-hook"},[e("h1",{staticClass:"title"},[t._s(s.name)])," ",e("ul",[t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})])," ",e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._s(s.name)])," ",e("p",{staticClass:"desc"},[t._s(s.description)])," ",e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},["月售"+t._s(s.sellCount)+"份"])," ",e("span",["好评率"+t._s(s.rating)+"%"])])," ",e("div",{staticClass:"price"},[e("span",{staticClass:"now"},["¥"+t._s(s.price)])," ",s.oldPrice?e("span",{staticClass:"old"},["¥"+t._s(s.oldPrice)]):t._e()])," ",e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"add-cart":function(e){t._drop(e)}}})])])])})])])})])])," ",e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})])," ",e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._s(t.totalCount)])])," ",e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},["¥"+t._s(t.totalPrice)])," ",e("div",{staticClass:"desc"},["另需配送费￥"+t._s(t.deliveryPrice)+"元"])])," ",e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._s(t.payDesc)])])," ",e("div",{staticClass:"balls-wrapper"},[e("transition-group",{attrs:{name:"drop",tag:"div"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[t._l(t.balls,function(t,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:s,staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])})])])," ",e("transition",{attrs:{name:"flod",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shop-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},["购物车"])," ",e("span",{staticClass:"empty",on:{click:t.empty}},["清空"])])," ",e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",[t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._s(s.name)])," ",e("div",{staticClass:"price"},[e("span",["¥"+t._s(s.price*s.count)])])," ",e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})])])})])])])])])," ",e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})])," ",e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"})," ",e("span",{staticClass:"name"},[t._s(t.seller.name)])])," ",e("div",{staticClass:"description"},[e("span",{staticClass:"description"},[t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达"])])," ",t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]})," ",e("span",{staticClass:"description"},[t._s(t.seller.supports[0].description)])]):t._e()])," ",t.seller.supports?e("div",{staticClass:"supports-content",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._s(t.seller.supports.length)+"个"])," ",e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()])," ",e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"})," ",e("span",{staticClass:"bulletin-text"},[t._s(t.seller.bulletin)])," ",e("i",{staticClass:"icon-keyboard_arrow_right"})])," ",e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})])," ",e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"detail-name"},[t._s(t.seller.name)])," ",e("div",{staticClass:"start-wrapper"},[e("start",{attrs:{size:48,score:t.seller.score}})])," ",t._m(0)," ",e("ul",{staticClass:"detail-list"},[t._l(t.seller.supports,function(s){return e("li",{staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]})," ",e("span",{staticClass:"description"},[t._s(s.description)])])})])," ",t._m(1)," ",e("div",{staticClass:"detail-info"},[e("p",{staticClass:"detail-info-content"},[t._s(t.seller.bulletin)])])])])," ",e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"icon-close"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"})," ",e("div",{staticClass:"text"},["优惠信息"])," ",e("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"})," ",e("div",{staticClass:"text"},["商家公告"])," ",e("div",{staticClass:"line"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",["\nwo shi seller  \n"])},staticRenderFns:[]}}]);