(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{328:function(t,e,s){"use strict";s.r(e);var l=s(33),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"宽高位置属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宽高位置属性"}},[t._v("#")]),t._v(" 宽高位置属性")]),t._v(" "),s("h2",{attrs:{id:"offsetwidth-offsetheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetwidth-offsetheight"}},[t._v("#")]),t._v(" offsetWidth / offsetHeight")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/offset1",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"offsetwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetwidth"}},[t._v("#")]),t._v(" offsetWidth")]),t._v(" "),s("p",[t._v("HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度。一个典型的（各浏览器的offsetWidth可能有所不同）offsetWidth是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值。")]),t._v(" "),s("h3",{attrs:{id:"offsetheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetheight"}},[t._v("#")]),t._v(" offsetHeight")]),t._v(" "),s("p",[t._v("HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。通常，元素的offsetHeight是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度。对于文档的body对象，它包括代替元素的CSS高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。")]),t._v(" "),s("h2",{attrs:{id:"offsettop-offsetleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsettop-offsetleft"}},[t._v("#")]),t._v(" offsetTop / offsetLeft")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/offset2",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"offsetparent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetparent"}},[t._v("#")]),t._v(" offsetParent")]),t._v(" "),s("p",[t._v('HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 offsetParent 为最近的 table, table cell 或根元素（标准模式下为 html；quirks 模式下为 body）。(距该元素最近的position不为static的祖先元素，如果没有则指向body元素)。当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。\noffsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。')]),t._v(" "),s("h3",{attrs:{id:"offsettop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsettop"}},[t._v("#")]),t._v(" offsetTop")]),t._v(" "),s("p",[t._v("HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部的距离。")]),t._v(" "),s("h3",{attrs:{id:"offsetleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetleft"}},[t._v("#")]),t._v(" offsetLeft")]),t._v(" "),s("p",[t._v("HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。")]),t._v(" "),s("p",[t._v("对块级元素来说，offsetTop、offsetLeft、offsetWidth 及 offsetHeight 描述了元素相对于 offsetParent 的边界框")]),t._v(" "),s("p",[t._v("然而，对于可被截断到下一行的行内元素（如 span），offsetTop 和 offsetLeft 描述的是第一个边界框的位置（使用 Element.getClientRects() 来获取其宽度和高度），而 offsetWidth 和 offsetHeight 描述的是边界框的尺寸（使用 Element.getBoundingClientRect 来获取其位置）。因此，使用 offsetLeft、offsetTop、offsetWidth、offsetHeight 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。")]),t._v(" "),s("h2",{attrs:{id:"clientwidth-clientheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientwidth-clientheight"}},[t._v("#")]),t._v(" clientWidth / clientHeight")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/client1",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"clientwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientwidth"}},[t._v("#")]),t._v(" clientWidth")]),t._v(" "),s("p",[t._v("Element.clientWidth 是一个只读属性，返回元素的内部宽度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距。")]),t._v(" "),s("h3",{attrs:{id:"clientheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientheight"}},[t._v("#")]),t._v(" clientHeight")]),t._v(" "),s("p",[t._v("Element.clientWidth 是一个只读属性，对于没有定义 CSS 或者内联布局盒子的元素为0，同时它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。")]),t._v(" "),s("p",[t._v("clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算。")]),t._v(" "),s("h2",{attrs:{id:"clienttop-clientleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clienttop-clientleft"}},[t._v("#")]),t._v(" clientTop / clientLeft")]),t._v(" "),s("h3",{attrs:{id:"clienttop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clienttop"}},[t._v("#")]),t._v(" clientTop")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/client2",alt:""}})]),t._v(" "),s("p",[t._v("Element.clientTop 是一个只读属性，表示一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。")]),t._v(" "),s("h3",{attrs:{id:"clientleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientleft"}},[t._v("#")]),t._v(" clientLeft")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/client3",alt:""}})]),t._v(" "),s("p",[t._v("Element.clientLeft 是一个只读属性，表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。clientLeft 不包括左外边距和左内边距。")]),t._v(" "),s("h2",{attrs:{id:"scrollwidth-scrollheight-scrolltop-scrollleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollwidth-scrollheight-scrolltop-scrollleft"}},[t._v("#")]),t._v(" scrollWidth / scrollHeight  / scrollTop / scrollLeft")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/scroll1",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"scrollwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollwidth"}},[t._v("#")]),t._v(" scrollWidth")]),t._v(" "),s("p",[t._v("Element.scrollWidth 是一个只读属性，以px为单位返回元素的内容区域宽度或元素的本身的宽度中更大的那个值。若元素的宽度大于其内容的区域（例如，元素存在滚动条时）, scrollWidth 的值要大于 clientWidth。")]),t._v(" "),s("h3",{attrs:{id:"scrollheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollheight"}},[t._v("#")]),t._v(" scrollHeight")]),t._v(" "),s("p",[t._v("Element.scrollHeight 是一个只读属性，它是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。包括元素的padding，但不包括元素的border和margin。scrollHeight也包括 ::before 和 ::after这样的伪元素。")]),t._v(" "),s("h3",{attrs:{id:"scrolltop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolltop"}},[t._v("#")]),t._v(" scrollTop")]),t._v(" "),s("p",[t._v("Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。")]),t._v(" "),s("p",[t._v("一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。")]),t._v(" "),s("p",[t._v("scrollTop 可以被设置为任何整数值，同时注意：")]),t._v(" "),s("ul",[s("li",[t._v('如果一个元素不能被滚动（例如，它没有溢出，或者这个元素有一个"non-scrollable"属性）， scrollTop将被设置为0。')]),t._v(" "),s("li",[t._v("设置scrollTop的值小于0，scrollTop 被设为0")]),t._v(" "),s("li",[t._v("如果设置了超出这个容器可滚动的值, scrollTop 会被设为最大值")])]),t._v(" "),s("h3",{attrs:{id:"scrollleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollleft"}},[t._v("#")]),t._v(" scrollLeft")]),t._v(" "),s("p",[t._v("Element.scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。")]),t._v(" "),s("p",[t._v("注意如果这个元素的内容排列方向（direction） 是rtl (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且scrollLeft值为0。此时，当你从右到左拖动滚动条时，scrollLeft会从0变为负数（这个特性在chrome浏览器中不存在）。")]),t._v(" "),s("p",[t._v("scrollLeft 可以是任意整数，然而：")]),t._v(" "),s("ul",[s("li",[t._v("如果元素不能滚动（比如：元素没有溢出），那么scrollLeft 的值是0。")]),t._v(" "),s("li",[t._v("如果给scrollLeft 设置的值小于0，那么scrollLeft 的值将变为0。")]),t._v(" "),s("li",[t._v("如果给scrollLeft 设置的值大于元素内容最大宽度，那么scrollLeft 的值将被设为元素最大宽度。")])]),t._v(" "),s("h2",{attrs:{id:"event-clientx-event-clienty-event-pagex-event-pagey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-clientx-event-clienty-event-pagex-event-pagey"}},[t._v("#")]),t._v(" event.clientX / event.clientY / event.pageX / event.pageY")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/xy",alt:""}})]),t._v(" "),s("p",[t._v("event.clientX 是目标点距离浏览器可视范围的X轴坐标")]),t._v(" "),s("p",[t._v("event.clientY 是目标点距离浏览器可视范围的Y轴坐标")]),t._v(" "),s("p",[t._v("event.pageX 是目标点距离document最左上角的X轴坐标")]),t._v(" "),s("p",[t._v("event.pageY 是目标点距离document最左上角的Y轴坐标")]),t._v(" "),s("h2",{attrs:{id:"innerwidth-innerheight-outerwidth-outerheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innerwidth-innerheight-outerwidth-outerheight"}},[t._v("#")]),t._v(" innerWidth / innerHeight / outerWidth / outerHeight")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/spot_browser",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);