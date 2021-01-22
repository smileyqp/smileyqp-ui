// src/components/button/index.js

import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')

class MixThreeD extends React.Component{



  render(){
    return <div className="mix3d"></div>
  }
}

MixThreeD.propTypes = {
  text: PropTypes.any
};

export default MixThreeD;

