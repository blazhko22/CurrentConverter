import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Converter from './components/Converter';
import { 
  Box, 
  Button,  
  List, 
  SlideFade, 
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
