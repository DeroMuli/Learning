import React from 'react';
import Navigation from './Navigation.js'
import SideBar from './SideBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import './App.css';

const App = function () {
  return (
    <Container>
    <Navigation/>
    <div className='container'>
      <hr />
      <div className='row'>
        <div className='col-sm-3'>
          <SideBar/>
        </div>
        <div class="col-sm-9 profile-desc"></div>
      </div>
    </div>
    </Container>
  );
} 

export default App;
