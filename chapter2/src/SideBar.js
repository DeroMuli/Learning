import React from 'react';
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
                <li className='list-group-item  text-right'>
                    <span className='pull-left'>
                        <strong className='pull-left'>
                                 Joining Date
                            <div className='clearfix'/>
                        </strong>
                    </span>
                    2.13.2022
                </li>
            </ul>
        )
    }
}

export default SideBar