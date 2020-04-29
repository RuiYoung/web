(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{361:function(n,s,a){"use strict";a.r(s);var t=a(33),r=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"匿名函数和闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数和闭包"}},[n._v("#")]),n._v(" 匿名函数和闭包")]),n._v(" "),a("h2",{attrs:{id:"匿名函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数"}},[n._v("#")]),n._v(" 匿名函数")]),n._v(" "),a("blockquote",[a("p",[n._v("没有函数名字的函数")])]),n._v(" "),a("ul",[a("li",[n._v("单独的匿名函数是无法运行和调用的")]),n._v(" "),a("li",[n._v("可以把匿名函数赋值给变量")]),n._v(" "),a("li",[n._v("通过表达式自我执行，语法：(匿名函数)()")]),n._v(" "),a("li",[n._v("匿名函数传递参数，语法：(匿名函数)(参数)")])]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 情况1.把匿名函数赋值给变量  \nvar fn=function (){\n    alert('我是匿名函数')\n}\nalert(fn)   //会将函数表达式输出\nfn()  \n\n//情况2.匿名函数通过表达式自我执行\n(function (){\n    alert('我是匿名函数')\n}\n)()\n\n//匿名函数传递参数\nfunction myfn(m,n){\n    alert(m+n)\n}\nmyfn(100,100);\n\n(function(m,n){\n    alert(m+n)\n})(1000,1000)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br")])]),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),a("blockquote",[a("p",[n._v("闭包的英文单词是closure，是指有权访问另一个函数作用域中变量的函数。"),a("br"),n._v("\n在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。内层的函数可以使用外层函数的所有变量，即使外层函数已经执行完毕。")])]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function myfn(){\n    return function (){\n        return('**********')\n    }\n}\n//alert(myfn)  //输出整个函数表达式\n//alert(myfn())  //输出匿名函数表达式\n\n//调用方式1\nalert(myfn()())\n//调用方式2\nvar bb=myfn()\nalert(bb())\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("h3",{attrs:{id:"闭包的相关知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的相关知识点"}},[n._v("#")]),n._v(" 闭包的相关知识点")]),n._v(" "),a("ul",[a("li",[n._v("常见的方式是在函数内部创建另一个函数")]),n._v(" "),a("li",[n._v("闭包的第一个用途：通过闭包可以访问局部变量")])]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function myfn(){\n    var bb='局部变量bb'\n    return function (){\n        return(bb) // 通过匿名函数返回myfn()的局部变量bb;\n    }\n}\n//调用方式1\n//alert(myfn()())\n\n//调用方式2\nvar csbb=myfn()\nalert(csbb())\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("ul",[a("li",[n._v("闭包的第二个用途：可以让局部变量的值始终保持在内存中"),a("br"),n._v("\n  优点:可以把局部变量驻留在内存中,可以避免使用全局变量;[全局变量在复杂程序中会造成许多麻烦（比如命名冲突，垃圾回收等），所以推荐使用私有的,封装的局部变量。而闭包可以实现这一点。]"),a("br"),n._v("\n  缺点：由于闭包里作用域返回的局部变量资源不会被立刻销毁回收,所以可能会占用更多的内存;所以过度使用闭包会导致性能下降")])]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function add(){\n    var num= 100; // 这里改为局部变量;\n    return function(){\n        num++;\n        alert(num);\n    }\n};\n// add()();add()();add()();//这种调用方式会出错,因为每次调用 num都会初始化一次;  \nvar fn=add()//只在这里初始化一次，后边调用的时候执行的是里边的匿名函数\nfn();fn();fn();\nfn=null //应及时解除引用，否则会占用更多内存\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fun(){\n    var arr=[];\n    for(var i=0; i<5; i++){\n        arr[i]=function(n){  \n            return function(){  \n                return '元素'+n;\n            }\n        }(i)  \n    }\n    return arr\n}\nvar Bb=fun()\n//alert(Bb.length)\n// alert(Bb[0]())\nfor(var i=0; i<5; i++){\n    //alert(Bb[i])  \n    alert(Bb[i]())  \n}\n//这次成功的输出了 ‘元素0 元素1 元素2 元素3 元素4 ’，而不再都是[元素5]\n/*\n    1.这里的匿名函数有一个参数 n，也就是最终将返回的结果数值；\n    2.在调用每个匿名函数时传入变量i\n    3.变量i的当前值会赋值给n，\n    4.匿名函数内部创建并返回了一个访问n的闭包\n    5.如此数组arr中的每个函数中都有了自己的n变量的一个副本(闭包可以将局部变量贮存在内存中)\n\n*/\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("h3",{attrs:{id:"闭包中的this问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包中的this问题"}},[n._v("#")]),n._v(" 闭包中的this问题")]),n._v(" "),a("ul",[a("li",[n._v("this是在运行时基于函数的执行环境来绑定的")]),n._v(" "),a("li",[n._v("全局函数中的this是window，而当函数作为某个对象的方法调用时，this就是指的那个对象")]),n._v(" "),a("li",[n._v("匿名函数的执行环境具有全局性，this通常是指向window的")])]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var name='The Window';\nvar obj={\n    name:'my obj',\n    get:function(){\n        return function(){\n            return this.name;\n        }\n    }\n}\n\nalert(obj.get()()) //这次返回的是全局变量 'The Window'\nalert(obj.get().call(obj))//这次又返回的是'my obj'，因为call()强制改变了this的指向\n\n\nvar name='The Window';\nvar obj={\n    name:'my obj',\n    get:function(){\n        //这里的this指的是对象，这里为obj\n        var self=this\n        return function(){\n            //闭包里的this指的是window\n            return self.name;\n        }\n    }\n}\nalert(obj.get()())  \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("h3",{attrs:{id:"模仿块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模仿块级作用域"}},[n._v("#")]),n._v(" 模仿块级作用域")]),n._v(" "),a("div",{staticClass:"language-{.javaScript} line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function myfun() {\n    for(var i=0;i<5;i++){\n\n    }  //i不会因为离开了for块就失效;\n    var i; //重新声明后i还是5,\n    alert(i)  //此时的i=5\n}\n\n//模仿块级作用域\nfunction myfun() {\n    (function(){\n      for(var i=0;i<5;i++){\n          alert(i)  \n      }  \n    })()  // 这里定义并立即调用了一个匿名函数;  \n    alert(i)  \n    //此时的i已结不存在 会报错:'i is not defined'\n}\nmyfun()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);