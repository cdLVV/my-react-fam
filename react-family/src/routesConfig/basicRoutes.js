// 利用bundle-异步导入, 按需加载
import Home from 'bundle-loader?lazy&name=home!routes/Home';
import News from 'bundle-loader?lazy&name=news!routes/News';
import Page2 from 'bundle-loader?lazy&name=page2!routes/Page2';
// import Page2 from 'bundle-loader?lazy&name=app-[name]!./routes/Page2';
// 同步导入
// import Page2 from './routes/Page2';

const routes = [
  { name: '首页', exact: true, path: "/", component: Home },
  { name: '新闻', path: "/news", component: News },
  { name: '第二页', path: "/page2", component: Page2 },
]

export default routes