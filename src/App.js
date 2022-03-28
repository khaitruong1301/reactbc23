import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './Components/BTLayout/BTLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderArray from './RenderArray/RenderArray';

function App() {
  return (
    <div className="App">
      {/* <BTLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <StyleComponent /> */}
      {/* <p className='text-red'>app component</p> */}
      <RenderArray />
    </div>
  );
}

export default App;
