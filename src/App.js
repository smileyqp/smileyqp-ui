import logo from './logo.svg';
import './App.css';
// import { Button } from 'smileyqp-ui';
import { Button,ReactNipple,Map } from './components';
import randomName from './utils/randomName'

function App() {
  return (
    <div className="App">
      <Button text={'hhhasdasdh'}></Button>
      <ReactNipple/>
      <Map/>
      <div>{randomName.getName()}</div>
    </div>
  );
}

export default App;
