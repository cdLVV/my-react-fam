import React from 'react';
import { hot } from 'react-hot-loader'
// import getRouter from 'src/router'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "routesConfig/basicRoutes";
import lazyLoad from "src/lazyLoad";
import ReactDocumentTitle from './components/ReactDocumentTitle'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import styles from './BasicLayout.less'

class BasicLayout extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {
              routes.map(route => {
                const Component = lazyLoad(route.component)
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    render={props => {
                      const { location } = props
                      return (
                        <ReactDocumentTitle location={location}>
                          <Header otherClass={styles.header} />
                          <Content otherClass={styles.content}>
                            <Component />
                          </Content>
                          <Footer otherClass={styles.footer} />
                        </ReactDocumentTitle>
                      )
                    }}
                  />
                )
              })
            }
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
// const getLocationLayout = withRouter(BasicLayout)
export default hot(module)(BasicLayout)