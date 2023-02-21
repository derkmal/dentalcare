import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Meeting from './Components/Meeting';
// import FormSection from './Components/FormSection';
// import Data from './Components/MeetingData';
import Home from './Components/Home';
import SignIn from './Components/SignIn';

    const App=()=> {
        return(
            <>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home/>}></Route>    
                    <Route path="/singin" element={<SignIn/>}></Route>    
                </Routes>

            </>
        );
    };

export default App;