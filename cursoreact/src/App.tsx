import React, {useState, useTransition} from 'react';



function App() {

  const [numberOne, setOneNumber] = useState<number>(0);
  const [operation, setOperation] = useState('');
  const [numberTwo, setTwoNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    switch (operation) {
      case '+':
        setResult(numberOne + numberTwo);
        break;
      
      case '-':
        setResult(numberOne - numberTwo);
        break;

      case '/':
        setResult(numberOne / numberTwo);
        break;
        
      case '*':
        setResult(numberOne * numberTwo);
        break;  
          
      
    
      default:
        break;
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

    <input type="number" onChange={(e) => {setOneNumber(e.target.valueAsNumber)}} value={numberOne} />


      <select onChange={(e) => {setOperation(e.target.value)}} value={operation}>
        <option value="">-- Selection Operation --</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>

      <input type="number" onChange={(e) => {setTwoNumber(e.target.valueAsNumber)}} value={numberTwo}/>

      <button type="submit">calculate</button> <b>RESULT:</b> {result}

    </form>

    </>

  );
}

export default App;
