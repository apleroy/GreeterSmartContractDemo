import HelloWorld from './HelloWorld'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>{process.env.REACT_APP_API_END_POINT}</p>
    <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;