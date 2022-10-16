import { useState, useRef, useRed } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { 
  Box, 
  Button, 
  Flex, 
  Input, 
  List, 
  Select, 
  SlideFade, 
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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

function Menu(props) {
  const {isOpen, onToggle} = useDisclosure()
  return(
    <Box>
      <HamburgerIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px' onClick={onToggle} />
      <SlideFade in={isOpen} offsetY='-20px' unmountOnExit>
        <Box position='absolute'>
          <List display='flex' flexDirection='column' gap='10px' fontSize='20px' >
            <Button onClick={() => {props.onClick('Calculator')}}> Calculator </Button>
            <Button onClick={() => {props.onClick('Converter')}}> Converter </Button>
            <Button>Settings</Button>
          </List>
        </Box>
      </SlideFade> 
    </Box>
  )
}

function App() {
  const [mode, setMode] = useState('Calculator');
  let application;
  switch (mode) {
    case 'ClickCalc': application = <Calculator  />;
        break;
    case 'InputCalc': application = <Converter  />;
        break;
    default:
      application = <Calculator />
}

  return (
    <Box h='90vh'>
      <Menu onClick={setMode} />
      {application}
    </Box>
  );
}

export default App;
