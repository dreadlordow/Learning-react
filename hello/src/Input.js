import React, { Component } from 'react'
import AuthContext from './context'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    static contextType = AuthContext

    changeValue = (event) => {
        this.setState({
            value: event.target.value

        })
    }

    clearPar = () => {
        this.setState({
            value: ''
        })
    }


    render() {
        const { name } = this.props
        console.log(this.context)
        return (
            <div>
                <input id='input' placeholder={name} onChange={this.changeValue} /><span>
                    <button onClick={this.clearPar}>Clear</button>

                </span>
                <p>{this.state.value}</p>
            </div>
        )

    }
}

export default Input