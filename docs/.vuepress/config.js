import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '愚公',
  description: '愚公移山,方知天高地厚',
  base: '/my-book/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      // 计算机基础
      {
        text: '计算机基础',
        children: [
          {
            text: '计算机网络',
            link: '/computer/basic/network/'
          },{
            text: '操作系统',
            link: '/computer/basic/os/'
          },{
            text: '计算机组成原理',
            link: '/computer/basic/composition/'
          },{
            text: '编译原理',
            link: '/computer/basic/compile/'
          }
        ]
      },
      // 计算机编程
      {
        text: '计算机编程',
        children: [
          {
            text: 'python编程',
            link: '/computer/coding/python/'
          },
          {
            text: 'java编程',
            link: '/computer/coding/java/'
          },
          {
            text: 'js编程',
            link: '/computer/coding/javascript/'
          },
          {
            text: 'node编程',
            link: '/computer/coding/node/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'go编程',
            link: '/computer/coding/go/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          }
        ],
      },
      // 数据库
      {
        text: '数据库学习',
        children: [
          {
            text: 'MySQL',
            link: '/database/mysql/',
            // 该元素将一直处于激活状态

          },
          {
            text: 'Redis',
            link: '/database/redis/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'MongoDB',
            link: '/database/mongodb/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'SQLite',
            link: '/database/sqlite/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          }
        ],
      },
      // 大数据
      {
        text: '大数据学习',
        children: [
          {
            text: 'Kafka',
            link: '/bigdata/kafka/',
            // 该元素将一直处于激活状态

          },
          {
            text: 'Spark',
            link: '/bigdata/spark/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'Handoop',
            link: '/bigdata/handoop/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          }
        ],
      },
      // 网站动态
      {
        text: '网站动态',
        link: '/other/weblog.md'
      },
      // 关于我们
      {
        text: '关于我们',
        link: '/other/about.md'
      },
      // github
      {
        text: 'Github',
        link: 'https://github.com/Alan-Rick/my-book'
      }
    ],
    sidebar: {
      '/computer/basic/network/': [
        {
          text: '一、前言',
          collapsible: true,
          children: [
            {
              text: '前言',
              collapsible: true,
              children: ['/computer/basic/network/substract.md']
            },{
              text: '基础',
              collapsible: true,
              children: ['/computer/basic/network/basic.md']
            }],
        },
        {
          text: '二、基础',
          collapsible: true,
          children: ['/guide/a.html'],
        },
      ],'/': [
      ],
    }
  })
})
