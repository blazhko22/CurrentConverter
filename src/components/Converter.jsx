import { useState, useRef, useRed } from 'react';
import { 
  Button, 
  Flex, 
  Input, 
  Select, 
} from '@chakra-ui/react';

function Converter() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const first = useRef();
  const second = useRed();

  function convert() {
    if (first.current.value == 'Meters') {
      switch(second.current.value) {
        case 'Centimeters': 
          setResult(input * 100); 
            break
        case 'Meters': 
          setResult(input); 
            break
      }
    }
    if (first.current.value == 'Centimeters') {
      switch(second.current.value) {
        case 'Centimeters': 
          setResult(input); 
            break
        case 'Meters': 
          setResult(input / 100); 
            break
      }
    }
  }

  return(
    <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%' >
      <Flex gap='15px'>
        <Select ref={second} size='md' w='90%' >
          <option value="Centimeters">Contimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>
      <Button onClick={() => {convert()}}>Convert</Button>
      <Flex>
        <Input onChange={(e) => {setInput(e.target.value)}} w='50%' type='number' />
        <Select ref={first} size='md' w='90%' >
          <option value="Centimeters">Contimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default Converter;