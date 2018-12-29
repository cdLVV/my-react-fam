export const CATEGORIES = "news/getCategories";
export const NEWSLIST = "news/getList";
export const NEWSDETAIL = "news/getDetail";

export function getCategories() {
  return { type: CATEGORIES }
}

export function getList() {
  return { type: NEWSLIST }
}

export function getDetail() {
  return { type: NEWSDETAIL }
}