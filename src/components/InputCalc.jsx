import { useState, useEffect } from 'react';
import {Text, Input, Flex} from '@chakra-ui/react';

function InputCalc (props) { 
    const [result, setResult] = useState('');
    const [counts, setCounts] = useState('');

    useEffect(() => {
      document.querySelector('input').focus()
    })
  
    function updateCounts (e) { 
      const expressions = /\+|\-|\/|\*|=|\$|[A-z] /;
      const lastNumber = e.target.value[e.target.value.lenght - 1];
      if (!expressions.test(lastNumber)) return
      else setResult(eval(e.target.value))
    }

    function sendDataToHistory(e) { 
      if (e.nativeEvent.key == "Enter") { 
        props.onKeyDown(counts) 
        setCounts('')
      } }
  
    return ( 
        <Flex justifyContent='center' alignItems='center' border='2px' borderRadius='8px' borderColor='gray.50'>
          <Input border='transparent' type="text" onKeyDown={(e) => {sendDataToHistory(e)}} onInput={ (e) => {updateCounts(e)} } />
          <Text textColor='tomato' px='8px'>{result}</Text>
        </Flex>
    )
  }

  export default InputCalc;