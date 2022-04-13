import React from 'react'
import MessagePanel from './MessagePanel'
import { Button } from 'react-bootstrap'
class MyApp extends React.Component{
    constructor(){
        super()
        this.state = {
            collapse : false
        }
        //binding the handler toggle button 
        this.handletoggle = this.handletoggle.bind(this)
    }

    handletoggle() {
        this.setState( prevstate => (
            {
                collapse : !prevstate.collapse
            }
        ))
    }

    render() {
        const showhideToggle = this.state.collapse ?
               (<MessagePanel>
                   <MessagePanel.Heading text='Show/Hide' />
                   <MessagePanel.Content>
                       Phasellus sed velit venenatis, suscipit eros a, laoreet dui.
                       </MessagePanel.Content>
                </MessagePanel>) : null;
        return (<div>
                  <h1>Namespaced Components Demo</h1>
                  <p><Button onClick={this.handletoggle}>Toggle</Button></p>
                  {showhideToggle}
                </div>)
    }      
}

export default MyApp