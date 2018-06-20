// *该文件包括：constants+actionCreator+reducer，是某一功能模块的数据核心(因为有reducer和actionCreator)，个人认为写在这也算合理因为views
// 目录下的容器组件只负责汇总reducer和action的，毕竟组件多了的话reducer和actionCreator也会变多，况且Home是Preview-XXX的父组件
const initialState = {
  loading: true,
  error: false,
  articleList: []
};

// 底下的常量定义是：constants，意思就是常量，个人认为没啥用，浪费时间
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

// 底下这玩意是actionCreators，就是创建action用的
export function loadArticles() {
  return {
    types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    url: "/api/articles.json",
  }
}

function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload
      }
    }

    case LOAD_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    default: {
      return state
    }
  }
}

export default previewList;