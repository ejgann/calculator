import React, { Component } from 'react'

class Keypad extends Component {
    render() {

        const button = ({ className, onClick, value }) => {
            return (
                <button className={className} onClick={onClick}>{value}</button>
            );
        };

        const buttonValues = {
            rows: {
                one: ['C', '+-', '%', '/'],
                two: [7, 8, 9, 'X'],
                three: [4, 5, 6, '-'],
                four: [1, 2, 3, '+'],
                five: [0, '.', '=']
            }
        };

        for (let key in buttonValues.rows) {
            for (let key1 in buttonValues.rows[key]) {
                console.log(buttonValues.rows[key][key1])
            }
        }

        return (
            <div>
                {/* <Button /> */}
            </div>
        )
    }
}

export default Keypad;