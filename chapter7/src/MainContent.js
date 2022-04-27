import React from "react"
import HomePage from "./HomePage"
import ViewTicket from "./ViewTicket"
import AddTicket from "./AddTicket"
import EditProfile from "./EditProfile"
import QueryComponent from './QueryComponent'
import { Route, Routes } from "react-router-dom"

let NoComponent = () => {
    return (
        <h1>URL not found </h1>
    )
}
class MainContent extends React.Component{
    render(){
        return (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/viewticket" element={<ViewTicket />} />
                    <Route path="/addticket" element={<AddTicket />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/query/:query" element={<QueryComponent />} />
                    <Route path="*" element={<NoComponent />} />
                </Routes>
        )
    }
}

export default MainContent