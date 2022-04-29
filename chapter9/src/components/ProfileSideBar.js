import React from "react"
import Image from 'react-bootstrap/Image'
class ProfileSideBar extends React.Component {
    render() {
        return (
            <ul className='list-group'>
                <li className='list-group-item text-muted'>
                    Derrick Muli
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
                    2.13.2022
                    </div>
                </li>
            </ul>
        )
    }
}

export default ProfileSideBar