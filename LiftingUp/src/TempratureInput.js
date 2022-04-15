import React from "react"
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TempratureInput extends React.Component{

    constructor(){
        super()
        this.handlerchange = this.handlerchange.bind(this)
    }

    handlerchange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        let temp = this.props.temperature
        let scale = this.props.scale
        return (
            <fieldset>
                <legend> Enter temprature in {scaleNames[scale]} : </legend>
                <input value={temp} onChange={this.handlerchange}></input>
            </fieldset>
        )
    }
}

export default TempratureInput