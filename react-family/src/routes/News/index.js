import React from 'react';
import { connect } from 'react-redux'
import * as actions from 'src/redux/actions/news'
import styles from './index.less'

class News extends React.Component {
  componentDidMount() {
    const { getCategories } = this.props
    getCategories()
  }

  render() {
    console.log(this.props, actions)
    const { categories = [] } = this.props
    return (
      <div>
        <div className={styles.categories}>
          {
            categories.map(item => <div key={item} className={styles.cate}>{item}</div>)
          }
        </div>
      </div>
    )
  }
}

export default connect(state => state.news, (dispatch, ownProps) => {
  return {
    getCategories: (...args) => dispatch(actions.getCategories(...args)),
  }
})(News)