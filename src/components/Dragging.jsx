import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';

function Dragging(props) { 

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.draggable'));
        elements.map(e => e.addEventListener('mouseenter', function(e) { 
            drag(e) 
        })); 
    })
    
}