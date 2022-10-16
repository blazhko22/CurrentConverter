import { useState } from 'react';
import './App.css';
import {Box, Text, Button, Input, Flex} from '@chakra-ui/react';

function Numbers (props) {
  const nums = Array.from(Array(10).keys()).map( 
    number => { 
      return <Button 
          onClick = { (e) => {
            if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
            else props.onClick(e.target.innerHTML)
          } }
          key={number} w='40px' h='40px' m='4px'>
              {number}
        </Button> 
      }
  )
  return (
    <Box display='flex' flexWrap='wrap' w='150px'>{nums}</Box>
  )
}

function CountButton (props) {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = props.data[props.data.lenght - 1]
  function checkExpressionType () {
    if (expressions.test(lastNumber)) return
    props.onClick(props.data + props.expression)
  }
  return (
    <Button bg='blue' m='4px' onClick = {() => {checkExpressionType()}}>
      {props.expression}
    </Button>
  )
}

function InputCalc (props) { 
  const [result, setResult] = useState('');
  const [counts, setCounts] = useState('');

  function updateCounts (e) { 
    // const expressions = /\+|\-|\/|\*|=|\$|[A-z] /;
    const expressions = /[0-9]/;
    const lastNumber = e.target.value[e.target.value.lenght - 2];
    if (!expressions.test(lastNumber)) return
    else setResult(eval(e.target.value))

    if (!expressions.test(lastNumber) && !expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) return
    if (expressions.test(e.nativeEvent.data)) setResult(eval(e.target.value))
    setCounts(e.target.value)
  }

  return ( 
    <Flex w='100%' justifyContent='center'>
      <Flex justifyContent='center' alignItems='center' border='2px' borderRadius='8px' borderColor='gray.50'>
        <Input border='transparent' value={counts} type="text" onInput={ (e) => {updateCounts(e)} } />
        <Text textColor='tomato' px='4px'>{result}</Text>
      </Flex>
    </Flex>   
  )
}

function App() {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

  return (
    <div className="App">
      <Flex display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='100vh'>
        <Flex gap='5px' flexDirection='column' justifyContent='center' alignItems='center' w='200px'>
          <InputCalc />
          <Flex w='100%' justifyContent='space-between' alignItems='center' bg='gray.50' borderRadius='8px'>
            <Text display='flex' justifyContent='start' alignItems='center'  w='fit-content' h='38px' px='16px' >
              {counts}
            </Text>
            <Text display='flex' justifyContent='start' alignItems='center' w='fit-content' h='38px' px='16px' textColor='tomato'>
              {result}
            </Text>
          </Flex>
          <Flex display='flex'>
            <Numbers data={counts} onClick={setCounts} />
            <Flex flexDirection='column' justifyContent='space-around'>
              <CountButton data={counts} expression={'+'} onClick={applyExpression} />
              <CountButton data={counts} expression={'-'} onClick={applyExpression} />
              <CountButton data={counts} expression={'*'} onClick={applyExpression} />
              <CountButton data={counts} expression={'/'} onClick={applyExpression} />
            </Flex>
            <Button bg='tomato' m='4px' onClick={() => {setResult(eval(counts))}}>
              =
            </Button>
          </Flex>          
        </Flex>        
      </Flex>
    </div>
  );
}

export default App;
