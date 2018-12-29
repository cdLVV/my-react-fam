import { createStore } from 'redux'

import news from './reducers/news';

const combineReducers = (state = {}, action) => {
  return {
    news: news(state.news, action)
  }
}

const store = createStore(combineReducers);

export default store;