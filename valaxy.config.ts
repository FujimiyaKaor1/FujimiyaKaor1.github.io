import { defineValaxyConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
  'i-ri-rss-line',
  'i-ri-bilibili-line',
  'i-ri-mail-line',
]

export default defineValaxyConfig<ThemeConfig>({
  theme: 'yun',

  themeConfig: {
    type: 'nimbo',

    colors: {
      primary: '#0078E7',
    },

    banner: {
      enable: true,
      title: ['海纳百川，', '有容乃大'],
      cloud: {
        enable: true,
      },
    },

    bg_image: {
      enable: true,
      url: '/houhu.jpg',
      opacity: 0.3,
    },

    say: {
      enable: true,
      hitokoto: {
        enable: true,
        api: 'https://v1.hitokoto.cn',
      },
    },

    pages: [
      {
        name: '关于',
        url: '/about',
        icon: 'i-ri-user-line',
        color: 'dodgerblue',
      },
    ],

    nav: [
      { text: '博客', link: '/', icon: 'i-ri-article-line' },
      { text: '关于', link: '/about', icon: 'i-ri-user-line' },
    ],

    footer: {
      since: 2026,
      icon: {
        enable: true,
        name: 'i-ri-cloud-line',
        animated: true,
        color: '#0078E7',
      },
      powered: true,
    },

    fireworks: {
      enable: true,
      colors: ['#66A7DD', '#3E83E1', '#214EC2'],
    },
  },

  unocss: {
    safelist,
    shortcuts: [
      {
        'bg-base': 'bg-white dark:bg-black',
        'color-base': 'text-black dark:text-white',
        'border-base': 'border-[#8884]',
      },
    ],
  },
})
