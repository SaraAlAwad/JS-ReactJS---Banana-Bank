
import './App.css';
import Einzahlen from './components/calc';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <img src="https://i.pinimg.com/originals/f6/bc/df/f6bcdf1cb1031c7fd2c66a5d6a0bda59.jpg" alt="" id='logoImg' />
        <h1 id='title'>Banana Bank</h1>
        <Einzahlen />
      </header>

    </div>
  );
}

export default App;
