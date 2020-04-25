module.exports = {
    title: '网站标题',
    description: '网站描述',
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
        { text: '博客', link: '/blog/' }, // 外部链接
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
            '/blog/JavaScript/': [
                {
                    title: 'JavaScript',
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1, 
                    children: [
                        ['Browser', '111'], // 以docs为根目录来查找文件
                        ['sort', '222'], // 以docs为根目录来查找文件 
                    // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                    // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ]
        }
    }
    
  };
