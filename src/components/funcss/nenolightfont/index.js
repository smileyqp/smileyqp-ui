// src/components/button/index.js

import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')

class NenoLightFont extends React.Component{
 

    render(){
        const {text} = this.props;
        return (
            <div>
                <p class="pink">PINK</p>
            </div>
        )
    }
}

NenoLightFont.propTypes = {
  text: PropTypes.any
};


export default NenoLightFont;

