import request from 'utils/request'

const appKey = '8d4e08d84e804ecf9d02f4d56fb85d78'

// 获取新闻类别
export function getNewsCategories() {
  return request('http://api.shujuzhihui.cn/api/news/categories', {
    method: 'POST',
    body: {
      appKey,
    }
  })
}

// 获取新闻列表
export function getNewsList({ category, updateTime, page }) {
  return request('http://api.shujuzhihui.cn/api/news/list', {
    method: 'POST',
    body: {
      appKey, category, updateTime, page
    }
  })
}

// 获取新闻详情
export function getNewsDetail({ newsId }) {
  return request('http://api.shujuzhihui.cn/api/news/detail', {
    method: 'POST',
    body: {
      appKey,
      newsId,
    }
  })
}