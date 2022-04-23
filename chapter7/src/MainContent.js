import React from "react"
import HomePage from "./HomePage"
import ViewTicket from "./ViewTicket"
import AddTicket from "./AddTicket"
import EditProfile from "./EditProfile"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
class MainContent extends React.Component{
    render(){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/viewticket" element={<ViewTicket />} />
                    <Route path="/addticket" element={<AddTicket />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                </Routes>
            </Router>
        )
    }
}

export default MainContent