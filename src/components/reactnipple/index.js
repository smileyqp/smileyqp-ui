// src/components/button/index.js

import React from 'react';
import PropTypes from 'prop-types';
// import './index.css';
require('./index.less')


const ReactNipple = ({ text }) => <button className="btn">遥杆{text}</button>

ReactNipple.propTypes = {
  text: PropTypes.any
};

export default ReactNipple;

