import React from 'react'
import Keypad from './Keypad';
import Screen from './Screen';


const CalculatorBody = () => {
    return (
        <div className="box">
            <Screen className="screen"/>
            <Keypad />
        </div>
    )
}

export default CalculatorBody;