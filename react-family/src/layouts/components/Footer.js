import React from 'react'
import styles from './Footer.less'

// export default class Footer extends React.PureComponent {
//   render() {
//     return (
//       <div className={`${styles.footer} ${styles.footer2}`}>我是Footer</div>
//     )
//   }
// }

export default function Footer(props) {
  return (
    <div className={`${styles.footer} ${props.otherClass}`}>我是Footer</div>
  )
}
