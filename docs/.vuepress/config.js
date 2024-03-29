module.exports = {
  title: '小P的老父亲',
  description: '个人记录',
  extend: '@vuepress/theme-default',
  theme: 'reco',
  base: '/',
  head: [
    
  ],
  themeConfig: {
    subSidebar: 'auto',
    nav: [
        { text: '首页', link: '/' },
        { 
            text: '博客', 
            items: [
                { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }
    ],
    sidebar: [
      {
          title: '首页',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "介绍", path: "/" }
          ]
      },
      {
        title: "TypeScript",
        path: '/typeScript',
        // collapsable: false, // 不折叠
        children: [
          // '/',
          { title: "基础", path: "/typeScript/basic", collapsable: false},
          { title: "进阶", path: "/typeScript/advanced", collapsable: false}
        ],
      }
    ]
  }
}