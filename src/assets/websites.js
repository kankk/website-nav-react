// 团队组织
const team = {
  id: 'team',
  group: '团队组织',
  links: [{
    title: 'AlloyTeam',
    link: 'http://www.alloyteam.com/',
    description: '腾讯Web前端团队',
    icon: './static/icons/alloyteam.jpg',
  }, {
    title: '奇舞团',
    link: 'https://75team.com/',
    description: '奇虎360前端开发团队',
    icon: './static/icons/75team.png',
  }, {
    title: '凹凸实验室',
    link: 'https://aotu.io/',
    description: '京东用户体验设计部',
    icon: './static/icons/aotu.png',
  }]
};

// 社区
const community = {
  id: 'community',
  group: '社区',
  links: [{
    title: '掘金',
    link: 'https://juejin.im/',
    description: '中文技术社区',
    icon: './static/icons/gold.png',
  }, {
    title: 'SegmentFault',
    link: 'https://segmentfault.com/',
    description: '中文IT技术问答网站',
    icon: './static/icons/segmentfault.png',
  }, {
    title: 'GitHub',
    link: 'https://github.com/',
    description: '开源/私有软件项目的Git托管平台',
    icon: './static/icons/github.png',
  }, {
    title: 'React China',
    link: 'http://react-china.org/',
    description: '',
    icon: './static/icons/reactchina.png',
  }]
};

// 前端门户
const portal = {
  id: 'portal',
  group: '前端门户',
  links: [{
    title: 'W3cplus',
    link: 'http://www.w3cplus.com/',
    description: '推广前端行业技术',
    icon: './static/icons/w3cplus.png'
  }, {
    title: '大前端',
    link: 'http://www.daqianduan.com/',
    description: '前端技术',
    icon: './static/icons/daqianduan.png'
  }]
};

// 框架类库
const frame = {
  id: 'frame',
  group: '框架类库',
  links: [{
    title: 'Vue (中文)',
    link: 'https://cn.vuejs.org/',
    description: '构建数据驱动的web界面的渐进式框架',
    icon: './static/icons/vue.png'
  }, {
    title: 'React (英文)',
    link: 'https://facebook.github.io/react/',
    description: '用于构建用户界面的JavaScript库',
    icon: './static/icons/react.png'
  }, {
    title: 'React (中文)',
    link: 'http://www.react-cn.com/',
    description: '用于构建用户界面的JavaScript库',
    icon: './static/icons/react.png'
  }, {
    title: 'React-Native',
    link: 'https://reactnative.cn/',
    description: '使用React构建原生app的框架',
    icon: './static/icons/react.png'
  }]
};

// 文档
const doc = {
  id: 'doc',
  group: '文档',
  links: [{
    title: 'ECMAScript6 教程',
    link: 'http://es6.ruanyifeng.com/',
    description: '阮一峰出品老师的ECMAScript6教程',
    icon: './static/icons/ecmascript6.png'
  }, {
    title: 'Vue',
    link: 'https://cn.vuejs.org/v2/guide/',
    description: '',
    icon: ''
  }, {
    title: 'vue-router',
    link: 'https://router.vuejs.org/zh-cn/',
    description: '',
    icon: ''
  }, {
    title: 'Vuex',
    link: 'https://vuex.vuejs.org/zh-cn/',
    description: '',
    icon: ''
  }, {
    title: 'react-router',
    link: 'http://www.uprogrammer.cn/react-router-cn/index.html',
    description: '',
    icon: ''
  }]
};

// CSS
const css = {
  id: 'css',
  group: 'CSS',
  links: [{
    title: 'SASS',
    link: 'http://sass.bootcss.com/',
    description: 'CSS扩展语言',
    icon: './static/icons/sass.png'
  }, {
    title: 'Less',
    link: 'http://less.bootcss.com/',
    description: '将css赋予了动态语言特性的动态式语言',
    icon: './static/icons/less.png'
  }]
};

// Node.js
const node = {
  id: 'node',
  group: 'Node',
  links: [{
    title: 'Express',
    link: 'http://www.expressjs.com.cn/',
    description: '基于Node.js的Web开发框架',
    icon: ''
  }]
};

// 前端工具
const feTool = {
  id: 'feTool',
  group: '前端工具',
  links: [{
    title: 'Webpack',
    link: 'https://doc.webpack-china.org/',
    description: '代码模块化构建打包工具',
    icon: './static/icons/webpack.png'
  }, {
    title: 'Babel',
    link: 'https://babeljs.io/',
    description: '使用最新的规范来编写js',
    icon: './static/icons/babel.png'
  }]
};

// 在线工具
const onlineTool = {
  id: 'onlineTool',
  group: '在线工具',
  links: [{
    title: 'Regexper',
    link: 'https://regexper.com/',
    description: '可视化正则表达式',
    icon: ''
  }, {
    title: 'CodePen',
    link: 'http://codepen.io/',
    description: '在线代码测试工具',
    icon: './static/icons/codepen.png'
  }]
};

// 大牛博客
const blog = {
  id: 'blog',
  group: '大牛博客',
  links: [{
    title: '张鑫旭',
    link: 'http://www.zhangxinxu.com/wordpress/',
    description: 'CSS, 阅文集团',
    icon: ''
  }]
};

const design = {
  id: 'design',
  group: '设计相关',
  links: [{
    title: 'Iconfont',
    link: 'http://iconfont.cn/',
    description: '阿里巴巴矢量图标库',
    icon: ''
  }]
};

export default [
  team,
  community,
  portal,
  frame,
  doc,
  css,
  node,
  feTool,
  onlineTool,
  blog,
  design
]