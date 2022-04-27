import React from "react"
import {useParams} from 'react-router-dom'

export default function QueryComponent(){
    let {query} = useParams()
    return (
        <h2>{query}</h2>
    )
}