// src/components/button/index.js

import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')

class SolidShadowfont extends React.Component{
 

    render(){
        const {text} = this.props;
        return <div data-name={text} className="solid-shadow-font">{text}</div>
    }
}

SolidShadowfont.propTypes = {
  text: PropTypes.any
};


export default SolidShadowfont;

