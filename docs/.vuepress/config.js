let { vlang } = require ('./category/vlang.js')
let { blog } = require ('./category/blog.js')

module.exports = {
    extend: '@vuepress/theme-default',
    title: 'Vlang中文',
    description: '互助V语言爱好者,致力于V编程语言中文生态网络',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: {
      '@vuepress/back-to-top': {},
      '@vuepress/pwa': {},
      'vuepress-plugin-baidu-autopush': {}
    },
    themeConfig: {
        docsDir: 'docs',
        logo: '/imgs/v.png',
        displayAllHeaders: true,
        lastUpdated: '上次更新', 
        sidebarDepth: 0,
        search: true,
        serviceWorker: {
          updatePopup: true
        },
        searchMaxSuggestions: 11,
        nav: [
          { text: '文档', link: '/blog/' },
          { text: '文档', link: '/doc/' },
          { text: '网络', link: '/www/' },
          { text: '论坛', link: 'http://ouisrc.xyz/a/community/vlang' },
          { text: '聊天室', link: 'https://riot.im/app/#/room/#vlang-cc:matrix.org' }
        ]
    },
    sidebar: {
      '/doc/': vlang('Vlang'),
      '/blog/': blog('Blog')
    }
}

