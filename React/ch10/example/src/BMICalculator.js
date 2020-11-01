import React, {useState} from 'react';


function BMICalculator(){
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(50);
    
    // Single Responsibility Principle
    function onChangeHeight(e) {
        setHeight(e.target.value);
    }
    
    function onChangeWeight(e) {
        setWeight(e.target.value);
    }

    function calculateBMI() {
        const convertedHeight = (height / 100);

        return weight / (convertedHeight * convertedHeight);
    }
    
    function getBMIAlertMessage() {
        const BMI = calculateBMI();
        if(BMI > 18.5 && BMI <25){
            return "정상체중.";
        }else if(BMI >=25){
            return "과체중.";
        }else {
            return "체중미달.";
        }

    }

    const onReset = () =>{
        setHeight(150);
        setWeight(50);
    }

    return(
    // my height, weight
    <>
        <input type="number" name="height" placeholder="키" onChange={onChangeHeight} value={height}/>
        <input type="number" name="weight" placeholder="몸무게" onChange={onChangeWeight} value={weight}/>
        <button onclick={onReset}>초기화</button>
        <div>
            <b>BMI : {getBMIAlertMessage()} </b>
            {calculateBMI()}
        </div>
    </>
    )

    
}

export default BMICalculator;

