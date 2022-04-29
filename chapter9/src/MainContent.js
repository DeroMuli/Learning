import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage'
import NewTickets from './components/NewTickets'
import Tickets from './components/Tickects'
let NoComponent = () => {
    return (
        <h1>URL not found </h1>
    )
}
class MainContent extends React.Component{
    render(){
        return (
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/viewticket" element={<Tickets />} />
                    <Route path="/addticket" element={<NewTickets />} />
                    <Route path="/editprofile"  />
                    <Route path="*" element={<NoComponent />} />
                </Routes>
        )
    }
}

export default MainContent