export const webInfo = {
  webName: "个人博客",
  title: "Stacey | 软件工程",
  avatar: "https://picsum.photos/200",
  backgroundImage: "/images/background.png",
  footer: "欢迎访问我的个人博客",
  randomCover: [
    "/images/cover1.jpg",
    "/images/cover2.jpg",
    "/images/cover3.jpg"
  ],
  notices: [
    "欢迎访问我的个人博客",
    "这里记录我的学习过程和项目经验"
  ]
}

export const articles = [
  {
    id: 1,
    userId: 1,
    articleTitle: "基于深度学习的图像识别研究",
    content: "本文主要研究了基于深度学习的图像识别方法，包括卷积神经网络、注意力机制等技术的应用...",
    cover: "https://picsum.photos/800/400?random=4",
    createTime: "2024-03-15",
    viewCount: 1234,
    labels: ["深度学习", "计算机视觉"]
  },
  {
    id: 2,
    userId: 1,
    articleTitle: "分布式系统架构设计实践",
    content: "本文分享了在大型分布式系统设计中的实践经验，包括微服务架构、负载均衡、服务发现等关键技术的应用...",
    cover: "https://picsum.photos/800/400?random=5",
    createTime: "2024-03-10",
    viewCount: 856,
    labels: ["分布式系统", "架构设计"]
  }
]

export const sortInfo = [
  {
    id: 1,
    sortName: "学习记录",
    sortType: 0,
    countOfSort: 1,
    labels: ["深度学习", "计算机视觉"]
  },
  {
    id: 2,
    sortName: "科研/竞赛经历",
    sortType: 0,
    countOfSort: 1,
    labels: ["分布式系统", "架构设计"]
  }
] 