import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class SideBar extends React.Component{
    render() {
        var df = this.props.children;
        console.log(df)
        return (
            <ul className='list-group'>
                <li className='list-group-item text-muted'>
                    Profile
                </li>
                <li className='list-group-item'>
                    <a className='center-block text-center' href='#'>
                        <center>Image</center>
                    </a>
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

export default SideBar