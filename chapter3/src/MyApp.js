import React from 'react'
import MessagePanel from './MessagePanel'
import { Button } from 'react-bootstrap'
class MyApp extends React.Component{
    constructor(){
        super()
        this.state = {
            collapse : true
        }
    }

    handletoggle() {
        var nextstate = !this.state.collapse
        this.setState({
            collapse : nextstate
        })
    }

    render() {
        const showhideToggle = 
               (<MessagePanel>
                   <MessagePanel.Heading text='Show/Hide' />
                   <MessagePanel.Content>
                       Phasellus sed velit venenatis, suscipit eros a, laoreet dui.
                       </MessagePanel.Content>
                </MessagePanel>);
        return (<div>
                  <h1>Namespaced Components Demo</h1>
                  <p><Button onClick={() => this.handletoggle()}>Toggle</Button></p>
                  {showhideToggle}
                </div>)
    }      
}

export default MyApp