import React from "react"
import Image from 'react-bootstrap/Image'
import {connect} from 'react-redux'
class ProfileSideBar extends React.Component {
    render() {
        return (
            <ul className='list-group'>
                <li className='list-group-item text-muted'>
                    {`${this.props.profile.first_name}   ${this.props.profile.last_name}`}
                </li>
                <li className='list-group-item'>
                    <center>
                        <Image src='/assets/images/placeholder.jpg' thumbnail/>
                    </center>
                </li>
                <li className='list-group-item text-right'>
                    <span className ="float-start" >
                        <strong className ="float-start">
                                 Joining Date
                            <div className='clearfix'/>
                        </strong>
                    </span>
                    <div className='float-end'>
                    {this.props.profile.joining_date}
                    </div>
                </li>
            </ul>
        )
    }
}

function maptoprops(state){
    let profile = state.Profile
    return{
        profile
    }
}

export default connect(maptoprops)(ProfileSideBar)