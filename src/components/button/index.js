// src/components/button/index.js

import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')

class Button extends React.Component{



  render(){
    return <button className="btn">测试</button>
  }
}
// const Button = ({ text }) => <button className="btn">这是一个组件按钮{text}</button>

Button.propTypes = {
  text: PropTypes.any
};

export default Button;

