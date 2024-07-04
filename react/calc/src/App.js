import logo from './logo.svg';
import './App.css';
import {ButtonNum, ButtonOperaion} from './modules/button';
import {useState} from 'react'

function App() {
  const numberArr = [1,2,3,4,5,6,7,8,9,0 ];
  const operationArr = ['AC', 'C', '=', '+', '-', '*', '/', ',', '+/-'];
  const [display, setDisplay] = useState('0');
  function numClick(event) {
    const newValue = event.target.value;
    setDisplay(prevDisplay => (prevDisplay === '0' ? newValue : `${prevDisplay}${newValue}`));
  }

  function operationClick(event) {
    const operation = event.target.value;
    setDisplay(0);
    console.log(operation); console.log('-------------');

  }

  return (
    <div className="main">
      <div className="container">
        <div className="screen">
          <p>{!display ? 0 : display}</p>
        </div>

        {/*вивід кнопок з цифрами*/}
        {numberArr.map((num, index) => (
          <ButtonNum 
          key={index}
          value={num}
          onClick={numClick}/>
        ))}

        {operationArr.map((num, index) => (
          <ButtonOperaion 
          key={index}
          value={num}
          onClick={operationClick}/>
        ))}

      </div>
    </div>
  );
}

export default App;
