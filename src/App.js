import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://testing-library.com/docs/react-testing-library/intro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Testing
        </a>
      </header>
      
      <Component1/>

      <header className="App-header">
      <Component2/>
      </header>


    </div>
    
  );
}

export default App;
