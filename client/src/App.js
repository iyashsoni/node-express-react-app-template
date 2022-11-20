import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('John');
  const [greetings, setGreetings] = useState('Hi there...');

  useEffect( () => {
    (async() => {
      const { name, greetings } = await (await fetch("/greet")).json();
      setName(name);
      setGreetings(greetings)
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am Yash</h1>
        <h3>{greetings}</h3>
      </header>
    </div>
  );
}

export default App;
