import Vue from 'vue'
import Vuex from 'vuex'
import { webInfo, articles, sortInfo } from '../mock/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webInfo: webInfo,
    articles: articles,
    sortInfo: sortInfo,
    currentUser: {
      id: 1,
      username: "Stacey",
      avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      email: "zhangsan@example.com",
      intro: "软件工程专业在读本科生",
      github: "https://github.com/Stacey-Z",
      gitee: "https://gitee.com/Stacey-Z"
    },
    toolbar: {
      visible: true,
      enter: false
    },
    sysConfig: {
      beian: '京ICP备XXXXXXXX号',
      webStaticResourcePrefix: '/static/'
    }
  },
  getters: {
    articleTotal: state => {
      if (state.sortInfo !== null && state.sortInfo.length !== 0) {
        if (state.sortInfo.length === 1) {
          return state.sortInfo[0].countOfSort;
        } else {
          return state.sortInfo.reduce((prev, curr) => {
            if (typeof prev === "number") {
              return prev + curr.countOfSort;
            } else {
              return prev.countOfSort + curr.countOfSort;
            }
          });
        }
      } else {
        return 0;
      }
    },
    navigationBar: state => {
      if (state.sortInfo !== null && state.sortInfo.length !== 0) {
        return state.sortInfo.filter(f => f.sortType === 0);
      } else {
        return [];
      }
    }
  },
  mutations: {
    loadCurrentUser(state, user) {
      state.currentUser = user
    },
    changeToolbarStatus(state, status) {
      state.toolbar = { ...state.toolbar, ...status }
    },
    loadSysConfig(state, config) {
      state.sysConfig = { ...state.sysConfig, ...config }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: []
})
