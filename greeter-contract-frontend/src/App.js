import Greeter from './Greeter'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>{process.env.REACT_APP_API_END_POINT}</p>
    <Greeter></Greeter>
    </div>
  );
}

export default App;