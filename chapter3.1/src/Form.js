import React from 'react'
import EmailInput from './EmailInput'
import IssueTypeInput from './IssueTypeInput'
import DepartmentInput from './DepartmentInput'
import CommentInput from './CommentInput'
class Form extends React.Component{   
    render(){
        const style = {color: "#ffaaaa"};
        return (
            <div>
                <EmailInput style = {style}/>
                <IssueTypeInput style ={style} />
                <DepartmentInput style ={style} />
                <CommentInput style = {style} />
                <div className='btn-group'>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                    <button type='reset' className='btn btn-link'>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default Form