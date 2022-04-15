import React from "react"
import BoilingVerdict from "./BoilingVerdict"
import TempratureInput from "./TempratureInput"
class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature : temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature : temperature});
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = (scale === 'f') ? this.tryConvert(temperature, this.toCelsius) : temperature;
      const fahrenheit = (scale === 'c') ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
      return (
        <div>
          <TempratureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TempratureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

export default Calculator