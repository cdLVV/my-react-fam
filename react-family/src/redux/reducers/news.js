// import { getNewsCategories, getNewsDetail, getNewsList } from "services/news";
import { CATEGORIES, NEWSLIST, NEWSDETAIL } from '../actions/news'

const initState = {
  namespace: 'news',
  categories: [],
  newsList: [],
}

export default function newsReducer(state = initState, action) {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: ['要闻', '财经', '娱乐']
      }
    // case NEWSLIST:
    //   return {
    //     ...state,
    //     categories: ['要闻', '财经', '娱乐']
    //   }
    default:
      return state
  }
}