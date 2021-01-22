// src/components/button/index.js

import React from 'react';
import PropTypes from 'prop-types';
// import './index.css';
import RisingMan from './RisingMan'
require('./index.less')


var risingman = new RisingMan()
var doc,canvas,ctx,textArea,btn,clean;

 
class UpupMan extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

      doc = document;
      canvas = doc.querySelector('canvas');
      ctx = canvas.getContext('2d');
      textArea = doc.querySelector('#js-val');
      btn = doc.querySelector('#js-btn');
      clean = doc.querySelector('#js-clean');
      btn.addEventListener('click', this.drawMan, false);
      clean.addEventListener('click', this.cleanFn, false);
    }



paint = (ctx, color) => {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

/**
 * 清空画布
 */
  cleanFn = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	this.paint(ctx, '#FFFF99');

	textArea.value = '';
};

/**
 * 绘制小人
 */
  drawMan = () => {
    
	let str = textArea.value.split(/\n/);
	let p = [];

	if (textArea.value.length > 40) {
		return alert('输入内容字数不能超过40。');
	}

	// cleanFn();

	str.forEach((item) => {
		for (let i = 0; i < item.length; i++) {
			p.push(risingman.drawImage(item[i]));
		}
  });
  console.log(p)
  p[0].then((aaa)=>{
    console.log('2222222222222222')
    console.log(aaa)
  })
	Promise.all(p)
		.then(function(images) {
      console.log(images)
			let len = 0;

			str.forEach((item, index) => {
				if (index) {
					len += str[index - 1].length;
				}

				for (let i = 0; i < item.length; i++) {
					ctx.drawImage(images[i + len], (i * 55) + 50, (index * 55) + i * 10);
				}
			});
		});
};
    render(){
      return <div className="container">
      <canvas width="700" height="400"></canvas>
      <textarea id="js-val" placeholder="输入内容字数不能超过40，且最好一行不要超过10个字。"></textarea>
      <button type="button" id="js-btn" className="button button-3d button-primary button-rounded">生成举牌小人</button>
      <button type="button" id="js-clean" className="button button-3d button-caution">清空</button>
  </div>
    }
}
UpupMan.propTypes = {
  text: PropTypes.any
};

export default UpupMan;

