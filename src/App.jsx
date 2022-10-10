// import logo from './logo.svg';
import './App.css';
import {Box, Button} from '@chakra-ui/react';

function Numbers (props) {
  const nums = Array.from(Array(10).keys()).map( 
    number => { 
      return <Button key={number} w='40px' h='40px' margin='4px'>
          {number}
        </Button> 
      }
  )
  return (
    <Box display='flex' flexWrap='wrap' w='15%'>{nums}</Box>
  )
}

function App() {
  return (
    <div className="App">
      <Box display='flex' justifyContent='center' alignItems='center' h='100vh'>
        <Numbers />
      </Box>
    </div>
  );
}

export default App;
