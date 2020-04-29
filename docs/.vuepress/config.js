module.exports = {
    title: '前端知识架构',
    description: '一份耕耘，一份收获',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
        // { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
        { text: '基础知识', link: '/basic/JavaScript/' }, // 外部链接
        { text: '浏览器', link: '/browser/' },
        { text: '网络', link: '/net/' },
        { text: '性能优化', link: '/performance/' },
        { text: 'Vue', link: '/vue/' }
        // 下拉列表
        // {
        //   text: 'GitHub',
        //   items: [
        //     { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
        //     {
        //       text: '算法仓库',
        //       link: 'https://github.com/OBKoro1/Brush_algorithm'
        //     }
        //   ]
        // }        
      ],
      sidebar:{
        // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/basic': [
          {
              title: 'JavaScript',
              path: '/basic/JavaScript/', 
              collapsable: true, // false为默认展开菜单, 默认值true是折叠,
              children: [
                  ['/basic/JavaScript/type', '类型'],
                  ['/basic/JavaScript/function', '函数'], // 以docs为根目录来查找文件
                  ['/basic/JavaScript/object', '面向对象'], // 以docs为根目录来查找文件 
                  ['/basic/JavaScript/nonfunctions-closures', '匿名函数与闭包'],
                  ['/basic/JavaScript/this', 'this指向'],
                  ['/basic/JavaScript/json', 'JSON'],
                  ['/basic/JavaScript/RegExp', '正则表达式RegExp'],
                  ['/basic/JavaScript/cookie', 'cookie'],
                  ['/basic/JavaScript/Date', 'Date'],
                  ['/basic/JavaScript/shallow-copy', '浅复制'],
                  ['/basic/JavaScript/deep-copy', '深复制'],
                  ['/basic/JavaScript/ajax', 'Ajax'],
                  ['/basic/JavaScript/error', '错误处理']
              ]
          },
          {
            title: 'CSS',
            path: '/basic/CSS/', 
            collapsable: true, // false为默认展开菜单, 默认值true是折叠,
            children: [
                ['/basic/CSS/css-trick', 'css技巧'],
                ['/basic/CSS/concept', '布局概念'],
                ['/basic/CSS/position-height', '位置属性'], // 以docs为根目录来查找文件
                ['/basic/CSS/em-rem-vw-vh', 'em、rem、vw、vh'], // 以docs为根目录来查找文件 
                ['/basic/CSS/bfc', 'BFC'],
                ['/basic/CSS/clear-float', '清浮动'],
                ['/basic/CSS/z-index', 'z-index'],
            ]
          },
          {
            title: 'HTML',
            path: '/basic/HTML/', 
            collapsable: true, // false为默认展开菜单, 默认值true是折叠,
            children: [
                ['/basic/HTML/h5vsh4', 'HTML5 vs HTML4']
            ]
          }
        ],
        '/performance' : [
          {
            title: '前端性能优化',
            path: '/performance/', 
            collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            children: [
                ['/performance/browser-optimize', '解锁浏览器背后的运行机制'],
                ['/performance/cdn-optimize', 'CDN 的缓存与回源机制解析'], // 以docs为根目录来查找文件
                ['/performance/dom-optimize', 'DOM 优化原理与基本实践'], // 以docs为根目录来查找文件 
                ['/performance/event-loop-optimize', 'Event Loop 与异步更新策略'],
                ['/performance/picture-optimize', '图片优化——质量与性能的博弈'],
                ['/performance/process', '浏览器加载流程'],
                ['/performance/ssr-optimize', '服务端渲染的探索与实践'],
                ['/performance/storage-optimize', '本地存储——从 Cookie 到 Web Storage、IndexedD'],
                ['/performance/webpack-optimize', 'webpack 性能调优与 Gzip 原理']
            ]
          }
        ]
      }
    }
  };
