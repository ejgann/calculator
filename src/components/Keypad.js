import React, { Component } from 'react'

class Keypad extends Component {
    render() {

        const button = ({ className, onClick, value }) => {
            return (
                <button className={className} onClick={onClick}>{value}</button>
            );
        };

        const buttonValues = [
            ['C', '+-', '%', '/'],
            [7, 8, 9, 'X'],
            [4, 5, 6, '-'],
            [1, 2, 3, '+'],
            [0, '.', '='],
        ];

        return (
            <div>
                
            </div>
        )
    }
}

export default Keypad;