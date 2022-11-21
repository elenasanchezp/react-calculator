import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import './styles/Button.css';
import {useState} from 'react'
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const getResult = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Please, add values to getting the results.')
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
      <Input input={input} />
      <div className="row">
        <Button manageClicks={addInput}>1</Button>
        <Button manageClicks={addInput}>2</Button> 
        <Button manageClicks={addInput}>3</Button>
        <Button manageClicks={addInput}>+</Button>
      </div>
      <div className="row">
        <Button manageClicks={addInput}>4</Button>
        <Button manageClicks={addInput}>5</Button>
        <Button manageClicks={addInput}>6</Button>
        <Button manageClicks={addInput}>-</Button>
      </div>
      <div className="row">
        <Button manageClicks={addInput}>7</Button>
        <Button manageClicks={addInput}>8</Button>
        <Button manageClicks={addInput}>9</Button>
        <Button manageClicks={addInput}>*</Button>
      </div>
      <div className="row">
        <Button manageClicks={getResult}>=</Button>
        <Button manageClicks={addInput}>0</Button>
        <Button manageClicks={addInput}>.</Button>
        <Button manageClicks={addInput}>/</Button>
      </div>
      <div className="row">
        <ClearButton manageClear={() => setInput('')}>
          Clear
        </ClearButton>
      </div>      
      </div>
    </div>
  );
}

export default App;
