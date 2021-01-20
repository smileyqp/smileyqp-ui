// src/components/button/index.js

import React from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')


class Map extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      return <button className="btn">地图</button>
    }
  }
Map.propTypes = {
  text: PropTypes.any
};

export default Map;

