import React from 'react';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import styles from './index.less';

const Iconfont = ({ className, style, svgSource }) => {
  return <InlineSVG src={svgSource} raw style={style} className={`${styles.colorfulicon} ${className}`} />
};

Iconfont.propTypes = {
  className: PropTypes.string,
};

export default Iconfont;
