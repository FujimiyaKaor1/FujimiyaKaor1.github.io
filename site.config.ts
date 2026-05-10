import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://chenyuyang-blog.pages.dev',
  lang: 'zh-CN',
  title: "陈渝样的博客",
  subtitle: '海纳百川，有容乃大',
  description: '陈渝样的个人博客 - 记录生活，分享技术',
  author: {
    name: '陈渝样',
    avatar: '/chenyuyang.jpg',
    status: {
      emoji: '🌊',
    },
  },
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/FujimiyaKaor1',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:FujimiyaKaor1@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],
  search: {
    enable: true,
    type: 'fuse',
  },
  comment: {
    enable: false,
  },
  statistics: {
    enable: true,
  },
  mediumZoom: {
    enable: true,
  },
  sponsor: {
    enable: false,
  },
})
