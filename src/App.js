import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-6P5FPLJB0P");
  ReactGA.send("pageview");

  const onClickReact = () => {
    ReactGA.event ({
      action: 'react_action',
      category: 'react_category',
      label: 'react_label',
      value: 'xxxxx'
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClickReact}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
