import React, {useState} from 'react';

function Counter(){
    // useState가 호출되면 배열을 반환한다.
    const [number, setNumber] = useState(0);
    
    

     const onIncrease = () =>{
        setNumber(preNumber => preNumber + 1)
    }
    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1)
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;