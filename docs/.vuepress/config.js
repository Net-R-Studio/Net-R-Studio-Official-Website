module.exports = {
    title: 'Net-R-Studio',
    description: '一个多方面发展的工作室',

    head: [
        [
            'meta', {
                name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ],
        // [
        //     'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
        //     { rel: 'shortcut icon', href: 'favicon.png' },
        // ],
        [
            'meta', {
                name: 'robots', content: 'index,follow'
            }
        ]
    ],
    markdown: {
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] }
        // extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        // md.use(require('markdown-it-xxx'))
        // }
    },

    // locales: {
    //     '/': {
    //         lang: 'zh-CN'
    //     },
    //     '/en-US/': {
    //         lang: 'en-US'
    //     }
    // },

    // 主题设置
    theme: 'reco',
    themeConfig: {
        blogConfig: {
            // category: {
            //   location: 2,     // 在导航栏菜单中所占的位置，默认2
            //   text: '分类' // 默认文案 “分类”
            // },
            tag: {
              location: 2,     // 在导航栏菜单中所占的位置，默认3
              text: '标签'      // 默认文案 “标签”
            }
          },
        author: 'Net-R-Studio',
        // logo: '/head.png',
        subSidebar: 'auto',
        // authorAvatar: '/avatar.png',
        activeHeaderLinks: true,
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '官方账号',
                items: [
                    { text: 'Bilibili', link: 'https://space.bilibili.com/108877433', icon: 'reco-bilibili' },
                    { text: 'Github', link: 'https://github.com/Net-R-Studio', icon: 'reco-tag' }
                ]
            },
            {
                text: '关于我们',
                link: '/about.html'
            },
            {
                text: '特殊页面',
                items: [
                    { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
                ]
            },

        ]
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'OWNER_OF_REPO',
        //     repo: 'NAME_OF_REPO',
        //     clientId: 'YOUR_CLIENT_ID',
        //     clientSecret: 'YOUR_CLIENT_SECRET',
        // }
        // friendLink: [
        //     {
        //         title: 'vuepress-theme-reco',
        //         desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        //         logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        //         link: 'https://vuepress-theme-reco.recoluan.com'
        //     },
        //     {
        //         title: '午后南杂',
        //         desc: 'Enjoy when you can, and endure when you must.',
        //         email: 'recoluan@qq.com',
        //         link: 'https://www.recoluan.com'
        //     }
        // ]
        // locales: {
        //     '/': {
        //         recoLocales: {
        //             homeBlog: {
        //                 // ...
        //             },
        //             pagation: {
        //                 // ...
        //             }
        //         }
        //     },
        //     '/en-US/': {
        //         recoLocales: {
        //             homeBlog: {
        //                 // ...
        //             },
        //             pagation: {
        //                 // ...
        //             }
        //         }
        //     }
        // },
        /**
        * support for
        * 'default'
        * 'funky'
        * 'okaidia'
        * 'solarizedlight'
        * 'tomorrow'
        */
        // codeTheme: 'tomorrow' // default 'tomorrow'
    },

    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 5
        }
        ],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
        ],
        ['@vuepress/medium-zoom'],
        ['vuepress-plugin-flowchart']
    ]
}