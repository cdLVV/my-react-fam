import React from 'react'
import { Iconfont } from 'components'
import logo from 'svg/logo.svg'
import styles from './Header.less'

export default function Header(props) {
  return (
    <div className={`${styles.header} ${props.otherClass}`}>
      <Iconfont svgSource={logo} style={{ fontSize: 36 }} />
    </div>
  )
}
