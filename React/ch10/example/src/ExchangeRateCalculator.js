import React, {useState} from 'react';

function ExchangeRateCalculator(){
    const [money, setMoney] = useState(0);
    const [rate, setRate] = useState(0);
    const [exchange, setExchange] = useState(0);

    function onChangeMoney(e){
        setMoney(e.target.value);
    }
    
    function onChangeRate(e){
        setRate(e.target.value);
    }

    function onExchange(e){
        return money * rate
    }
    


    return (
        <> 
            <input type="number" name="money" placeholder="환전할 금액" onChange={onChangeMoney} value={money} />
            <input type="number" name="rate" placeholder="환율" onChange={onChangeRate} value={rate} />
            <select>
                <option>EURO</option>
                <option>Dollar</option>
                <option>JPY</option>
                <option>KRW</option>
            </select>
            
            <button>초기화</button>
            <div>
                <b>{onExchange()}</b>
            </div>
        </>
    )

}


export default ExchangeRateCalculator;