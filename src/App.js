import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './common/Header';
// import  Post  from './common/Post';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile'
import Explore from './components/Explore'
import Notifications from './components/Notification'

function App() {
  return (
    <>
    <div className="super_container">
    <Header/>
    <div style={{height:"700px"}} className='mt-4'> 
       <div className='container-fluid '>
       <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/login' element={<Login/>}></Route>
         <Route exact path='/explore' element={<Explore/>}></Route>
         <Route exact path='/notifications' element={<Notifications/>}></Route>
         <Route exact path='/profile' element={<Profile/>}></Route>

       </Routes>
            
       </div>
    </div>
       
    </div>
 
    
    </>
  );
}

export default App;
