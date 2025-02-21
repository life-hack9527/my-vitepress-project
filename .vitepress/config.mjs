import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Finance hack",
  description: "A VitePress Site",
  srcDir: 'docs',
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    // https://vitepress.dev/reference/default-theme-config
    base: "/my-vitepress-project/",
    nav: [
      { text: '会计核算', 
        items:[
          { text: '企业会计准则', link:'/会计核算/企业会计准则/《企业会计准则——基本准则》' },
          { text: '会计准则解释', link:'/会计核算/会计准则解释/《企业会计准则第1号——存货》应用指南' },  
          { text: '会计核算管理办法', link:'/会计核算/会计核算管理办法/会计核算管理办法' },
    ]},
      { text: '税务管理', link: '/' },
      { text: '资金管理', link: '/' },
      { text: '预算管理', link: '/' },
      { text: '资产管理', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar:sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright@2025-Finance hack "
    }
  }
})
