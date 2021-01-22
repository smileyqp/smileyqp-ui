// src/components/button/index.js

import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.scss')

class Button extends React.Component{

  componentDidMount(){
    var classname = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', this.animateButton, false);
    }
  }
   animateButton = (e) => {

    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  

  render(){
    return <button className="bubbly-button">Click me!</button>
  }
}
// const Button = ({ text }) => <button className="btn">这是一个组件按钮{text}</button>

Button.propTypes = {
  text: PropTypes.any
};


export default Button;

