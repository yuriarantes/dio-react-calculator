import { Container, Content, Row} from './styles';

import Input from './Components/Input';
import Button from './Components/Button';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState(0)
  const [resultCount, setResultCount] = useState(0)
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(0);
  }

  const handleAddNumber = (number) => {
    setCurrentNumber (prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = (result = false) => {
    if (firstNumber === '0'){
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('0');
      setResultCount(Number(currentNumber))
      setOperation('+');

    } else if (result) {
      setResultCount(Number(resultCount) + Number(currentNumber));

      setCurrentNumber(Number(resultCount) + Number(currentNumber))
      setOperation('')
      setResultCount(0)

    } else {
      setResultCount(Number(resultCount) + Number(currentNumber))
      setOperation('+')
      setCurrentNumber('0')
    }
  }

  const handleSubNumbers = (result = false) => {

    if (firstNumber === '0'){
      setFirstNumber(Number(currentNumber))
      setResultCount(Number(currentNumber))

      setCurrentNumber('0');
      setOperation('-');

    } else if (result) {
      setResultCount(Number(resultCount) - Number(currentNumber));

      setCurrentNumber(Number(resultCount) - Number(currentNumber))
      setOperation('')
      setResultCount(0)

    } else {
      setResultCount(Number(currentNumber))
      setOperation('-')
      setCurrentNumber('0')
    }
  }

  const handleMultipleNumbers = (result = false)  =>  {
    if (firstNumber === '0'){
      setFirstNumber(Number(currentNumber))
      setResultCount(Number(currentNumber))

      setCurrentNumber('0')
      setOperation('*')

    } else if (result) {
      setResultCount(Number(resultCount) * Number(currentNumber))

      setCurrentNumber(Number(resultCount) * Number(currentNumber))
      setOperation('*')
      setResultCount(0)

    } else {
      setResultCount(Number(currentNumber))
      setOperation('*')
      setCurrentNumber('0')

    }

  }

  const handleDivNumbers = (result = false) => {
    if (firstNumber === '0'){
      setFirstNumber(Number(currentNumber))
      setResultCount(Number(currentNumber))

      setCurrentNumber('0')
      setOperation('/')
    
    } else if (result) {
      setResultCount(Number(resultCount) / Number(currentNumber))

      setCurrentNumber(Number(resultCount) / Number(currentNumber))
      setOperation('/')
      setResultCount(0)

    } else {
      setResultCount(Number(currentNumber))
      setOperation('/')
      setCurrentNumber('0')

    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers(true);
          break

        case '-':
          handleSubNumbers(true);
          break
        
        case '*':
          handleMultipleNumbers(true);
          break

        case '/':
          handleDivNumbers(true);
          break

        default:
          break
      }
    }
  }

  return (
    <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
              <Button label='(' />
              <Button label=')' />
              <Button label='%' />
              <Button label='C' onClick={handleOnClear} />
          </Row>
          <Row>
              <Button label='7' onClick={() => handleAddNumber(7)} />
              <Button label='8' onClick={() => handleAddNumber(8)} />
              <Button label='9' onClick={() => handleAddNumber(9)} />
              <Button label='/' onClick={() => handleDivNumbers(false)}/>
          </Row>
          <Row>
              <Button label='4' onClick={() => handleAddNumber(4)} />
              <Button label='5' onClick={() => handleAddNumber(5)} />
              <Button label='6' onClick={() => handleAddNumber(6)} />
              <Button label='x' onClick={() => handleMultipleNumbers(false)} />
          </Row>
          <Row>
              <Button label='1' onClick={() => handleAddNumber(1)} />
              <Button label='2' onClick={() => handleAddNumber(2)} />
              <Button label='3' onClick={() => handleAddNumber(3)} />
              <Button label='-' onClick={() => handleSubNumbers(false)}/>
          </Row>
          <Row>
              <Button label='0' onClick={() => handleAddNumber(0)} />
              <Button label='.' onClick={() => handleAddNumber('.')} />
              <Button label='=' onClick={handleEquals}/>
              <Button label='+' onClick={() => handleSumNumbers(false)} />
          </Row>
        </Content>
    </Container>
  );
}

export default App;
 