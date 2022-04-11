import React from 'react'
const MessagePanel = class extends React.Component {
    render() {
        return ( <div className='collapse in'> {this.props.children} </div>)
    }
}

MessagePanel.Heading = class extends React.Component{
    render() {
        return ( <h2>{this.props.text}</h2> )
    }
}

MessagePanel.Content = class extends React.Component{
    render() {
        return (<div className='well'> {this.props.children} </div>)
    }
}

export default MessagePanel