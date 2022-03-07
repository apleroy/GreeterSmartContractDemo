import Greeter from './Greeter'
import './App.css';
import GasPrice from './GasPrice';
import Environment from './Environment';

function App() {
  return (
    <div className="App">
      <Environment></Environment>
      <br></br>
      <GasPrice></GasPrice>
      <br></br>
      <Greeter></Greeter>
    </div>
  );
}

export default App;