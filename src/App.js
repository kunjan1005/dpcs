import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './common/Header';
// import  Post  from './common/Post';
import { Route, Routes } from 'react-router';
import Home from './components/Home';

function App() {
  return (
    <>
    <div className="super_container">
    <Header/>
    <div style={{height:"700px"}} className='mt-4'> 
       <div className='container-fluid '>
       <Routes>
         <Route exact path='/' element={<Home/>}></Route>
       </Routes>
            
       </div>
    </div>
       
    </div>
 
    
    </>
  );
}

export default App;
