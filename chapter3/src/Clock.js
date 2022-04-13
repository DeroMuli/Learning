import React from 'react'
class Clock extends React.Component{

    constructor(){
        super()
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        this.TimerId = setInterval(() => {
            this.updateclock()
        }, 1000);
    }

    updateclock(){
        this.setState(  
            {
                date : new Date()
            }
        )
    }

    componentWillUnmount(){
        clearInterval(this.TimerId)
    }

    render() {
        return (
        <h1>
            {this.state.date.toLocaleTimeString()}
        </h1>
        )
    }
}

export default Clock