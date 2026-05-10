import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://chenyuyang-blog.pages.dev',
  lang: 'zh-CN',
  title: 'GY の小站',
  subtitle: '记录生活，分享技术',
  description: '陈玉阳的个人博客',
  author: {
    name: 'GY',
    avatar: '/yanghu.jpg',
    status: {
      emoji: '🌊',
    },
  },
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],
  search: {
    enable: true,
    type: 'fuse',
  },
  comment: {
    enable: false,
  },
  sponsor: {
    enable: false,
  },
})
