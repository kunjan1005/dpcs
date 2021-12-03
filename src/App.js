import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './common/Header';
// import  Post  from './common/Post';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile'
import Explore from './components/Explore'
import Notifications from './components/Notification'
import Singup from './components/Signup';
import PostPage from './common/PostPage';
import TroubleLogin from './components/TroubleLogin'
import Loading from "./common/Loading";
import Error from './common/Error'
import dotenv from 'dotenv'
import Editprofile from './components/Editprofile';
function App() {

  return (
    <>
    <div className="super_container">
    {/* <Loading/> */}

    <Header/>
    <div style={{backgroundColor:'#fafafa'}} className='html_content_body'> 
       <div className='container-fluid'>
      
       <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/restaurant/:username' element={<PostPage/>}></Route>
         <Route exact path='/login' element={<Login/>}></Route>
         <Route exact path='/singup' element={<Singup/>}></Route>
         <Route exact path='/fotgot_password' element={<TroubleLogin/>}></Route>
         <Route exact path='/explore' element={<Explore/>}></Route>
         <Route exact path='/notifications' element={<Notifications/>}></Route>
         <Route exact path='/profile' element={<Profile/>}></Route>
         <Route exact path='/profile/edit' element={<Editprofile/>}></Route>
         <Route path='*' element={<Error/>}></Route>
       </Routes>
          
       </div>
    </div>
       <ToastContainer/>
    </div>
 
    
    </>
  );
}

export default App;
