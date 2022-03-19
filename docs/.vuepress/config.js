module.exports = {
    title: "Net-R-Studio",
    description: "一个多方面发展的工作室",

    head: [
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
        [
            "meta",
            {
                name: "robots",
                content: "index,follow",
            },
        ],
        [
            'link',
            { rel: 'shortcut icon', href: '/favicon.ico' },
        ]
    ],
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "#"
        },
        toc: {
            includeLevel: [1, 2]
        },
        // extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        // md.use(require('markdown-it-xxx'))
        // }
    },

    // 多语言配置
    // locales: {
    //     '/': {
    //         lang: 'zh-CN'
    //     },
    //     '/en-US/': {
    //         lang: 'en-US'
    //     }
    // },

    // 主题设置
    theme: "reco",
    themeConfig: {
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: "标签", // 默认文案 “标签”
            },
        },
        author: "Net-R-Studio",
        logo: "/main.png",
        subSidebar: "auto",
        // authorAvatar: "/main-avatar.png",
        activeHeaderLinks: true,
        nav: [
            {
                text: "主页",
                link: "/",
            },
            {
                text: "官方账号",
                items: [{
                    text: "哔哩哔哩",
                    link: "https://space.bilibili.com/108877433",
                    icon: "reco-bilibili",
                },
                {
                    text: "github",
                    link: "https://github.com/Net-R-Studio",
                    icon: "reco-tag",
                },
                ],
            },
            {
                text: "关于我们",
                link: "/about/",
            },
            {
                text: "特殊页面",
                items: [{
                    text: "时间轴",
                    link: "/timeline/",
                    icon: "reco-date"
                }],
            },
        ],
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
        [
            "@vuepress/search",
            {
                searchMaxSuggestions: 5,
            },
        ],
        [
            "@vuepress/active-header-links",
            {
                sidebarLinkSelector: ".sidebar-link",
                headerAnchorSelector: ".header-anchor",
            },
        ],
        ["@vuepress/medium-zoom"],
        ["vuepress-plugin-flowchart"],
    ],
};
