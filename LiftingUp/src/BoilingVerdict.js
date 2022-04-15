import React from "react"

class BoilingVerdict extends React.Component{
    render(){
        const paragraph = this.props.celsius > 100 ? 
        (<p> The water will boil </p>) :
        (<p>The water will not boil </p>)
        return paragraph;
    }
}

export default BoilingVerdict