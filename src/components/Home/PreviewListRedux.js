const initialState = {
  loading: true,
  error: false,
  articleList: []
};

// 底下的敞亮定义是：constants，意思就是常量，个人认为没啥用，浪费时间
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

// 底下这玩意是actionCreators，就是创建action用的
export function loadArticles() {
  return {
    types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    url: "/api/articles.json"
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
        articleList: action.payload.articleList
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