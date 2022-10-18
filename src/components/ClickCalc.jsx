import { useState } from 'react';
import {Box, Text, Button, Flex } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-drag-and-drop';

function Numbers (props) {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','].map( 
    number => { 
      return <Button 
          onClick = { (e) => {
            if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
            else props.onClick(e.target.innerHTML)
          } }
          key={number} w='60px' h='60px' m='4px'>
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
    <Button className="droppable" bg='capri' m='4px' w='60px' h='60px' onClick = {() => {checkExpressionType()}}>
      {props.expression}
    </Button>
  )
}

function ClickCalc(props) {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

  return (
    <Flex display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Flex gap='5px' flexDirection='column' justifyContent='center' alignItems='center'>
          <Draggable result={result} setResult={setResult} setHistory={props.onClick} >
            <Flex w='90%' justifyContent='space-between' alignItems='center' bg='gray.50' borderRadius='8px'>
              <Text display='flex' justifyContent='start' alignItems='center'  w='fit-content' h='40px' px='16px' >
                {counts}
              </Text>
              <Text display='flex' justifyContent='start' alignItems='center' w='fit-content' h='40px' px='16px' textColor='tomato'>
                {result}
              </Text>
            </Flex>
            <Flex display='flex'>
              <Numbers data={counts} onClick={setCounts} />
              <Flex flexDirection='column' >
                <CountButton data={counts} expression={'+'} onClick={applyExpression} />
                <CountButton data={counts} expression={'-'} onClick={applyExpression} />
                <CountButton data={counts} expression={'*'} onClick={applyExpression} />
                <CountButton data={counts} expression={'/'} onClick={applyExpression} />
              </Flex>
              <Button bg='tomato' m='4px' w='60px' h='60px' 
                onClick={() => {
                  setResult(eval(counts))
                  setCounts('0')
                  props.onClick(counts)
                }}>
                =
              </Button>
            </Flex> 
          </Draggable>         
        </Flex>        
    </Flex>
  );
}

export default ClickCalc;
