import logo from './logo.svg';
import './App.css';
import {randomName} from 'smileyqp-ui';
import { Button,ReactNipple,Map,UpupMan,MixThreeD } from './components';
// import randomName from './components/utils/randomName'

function App() {
  return (
    <div className="App">
      <Button text={'hhhasdasdh'}></Button>
      <ReactNipple/>
      <Map/>
      <div>{randomName.getName()}</div>
      <UpupMan/>
      <MixThreeD/>
    </div>
  );
}

export default App;
