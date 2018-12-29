import React from 'react';
import NavBar from './NavBar'
import styles from "./Content.less";

export default class Content extends React.PureComponent {
  render() {
    return (
      <div
        className={`${styles.content} ${this.props.otherClass}`}
      >
        <NavBar />
        <div className={styles.child}>
          {this.props.children}
        </div>
      </div>
    )
  }
}