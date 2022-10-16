import { useState } from 'react';
import {Box, Button } from '@chakra-ui/react';
import ClickCalc from './ClickCalc';
import InputCalc from './InputCalc';

function History(props) { 
    const results = props.data.map(result => { 
        return <Button key={result}>{result}</Button> 
    })
    return (
        <Box> 
            {results} 
        </Box>
    )
}

function Calculator() {
    const [calcType, setCalcType] = useState('ClickCalc');
    const [history, setHistory] = useState([]);
    let calculator;
    switch (calcType) {
        case 'ClickCalc': calculator = <ClickCalc onClick={updateHistory} />;
            break;
        case 'InputCalc': calculator = <InputCalc onKeyDown={updateHistory} />;
            break;
        default:
            calculator = <ClickCalc />
    }

    function updateHistory(calcResult) { 
        if (history.length > 6) {history.shift()}
        setHistory(history.concat(eval(calcResult)))
    }

    function calcTypeChenge() {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' m='10px'>
            <Button onClick={calcTypeChenge}>
                Change CalcType
            </Button>
            <Box m='10px'>
                <History data={history} />
                {calculator}
            </Box>
        </Box>
            
    )
}

export default Calculator;