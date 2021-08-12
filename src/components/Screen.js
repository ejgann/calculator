import React, { Component } from 'react'

class Screen extends Component {
    render() {
        let { result } = this.props;

        return (
            <div className="result">
                <h1>Calculator</h1>
                <p>{ result } </p>
            </div>
        )
    }
}

export default Screen;