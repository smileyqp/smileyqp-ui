#### React UI组件库


[smileyqp-ui的npm源](https://www.npmjs.com/package/smileyqp-ui)

> 一直想写一个UI组件库来着...



#### smileyqp-ui使用方法

```shell
//推荐使用cnpm;npm和yarn也可以
cnpm install smileyqp-ui --save 

//react页面;直接像其他组件库一样引用即可
import {Button} from 'smileyqp-ui'
function App() {
  return (
    <div className="App">
     <Button>smielyqp</Button>
    </div>
  );
}

export default App;
```



#### 项目目录结构

```js
|-smileyqp-ui
|  |-public
|  |-src
|     |-components	//组件
|     	|-style
|       	|-default.less  
|     	|-button
|       	|-index.js  
|       	|-idnex.less  
|     	|-index.js
|  	  |-App.js	//演示
|  	  |-App.less
|     |-index.js
|  |-pakage.json
|  |-theme.json
...（其他）

```

### 其他

- [添加less支持](https://blog.csdn.net/qq_34273059/article/details/112534563)



