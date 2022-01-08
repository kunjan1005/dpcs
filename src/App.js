import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './common/Header';
// import  Post  from './common/Post';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile'
import Explore from './components/Explore'
import Dip from './components/Dip'
import Notifications from './components/Notification'
import Singup from './components/Signup';
import PostPage from './common/PostPage';
import TroubleLogin from './components/TroubleLogin'
import Error from './common/Error'
import Editprofile from './components/Editprofile';
import Logout from './components/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './common/Loading';
import Restaurant from './components/Restaurant';
import Order from './components/Order';
import Cart from './components/Cart';
import BookTable from './components/BookTable';
import ScrollBar from 'react-custom-scrollbars-2';
import CheckOut from './components/CheckOut';
import AddressBook from './components/AddressBook';
import EditForm from './custom/EditForm';
import ItemDetail from './components/ItemDetail';
import MyOrders from './common/MyOrders';
import OrderDetails from './common/OrderDetails';
import BookingTableList from './common/BookingTableList'

function App() {
  let { isLoading } = useAuth0()
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>

      <div className="super_container">
        <Header />
        <div style={{ backgroundColor: '#fafafa' }} className='html_content_body pb-4'>
           <ScrollBar>
          <div className='container-fluid'>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/post/:id' element={<PostPage />}></Route>
              <Route exact path='/restaurant/:sid' element={<Restaurant/>}/>
              <Route exact path='/restaurant/order/:sid' element={<Order/>}/>
              <Route exact path='/restaurant/cart/' element={<Cart/>}/>
              <Route exact path='/restaurant/checkout/' element={<CheckOut/>}/>
              <Route exact path='/restaurant/addresbook/' element={<AddressBook/>}/>
              <Route exact path='/restaurant/cart/:sid' element={<Cart/>}/>
              <Route exact path='/restaurant/booking' element={<BookingTableList/>}/>
              <Route exact path='/editform' element={<EditForm/>}/>
              <Route exact path='/restaurant/itemdetail/' element={<ItemDetail/>}/>
              <Route exact path='/restaurant/myorders/' element={<MyOrders/>}/>
              <Route exact path='/restaurant/orderdetails/:order_id' element={<OrderDetails/>}/>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/singup' element={<Singup />}></Route>
              <Route exact path='/fotgot_password' element={<TroubleLogin />}></Route>
              <Route exact path='/explore' element={<Explore />}></Route>
              <Route exact path='/dip' element={<Dip />}></Route>
              <Route exact path='/profile' element={<Profile />}></Route>
              <Route exact path='/profile/edit' element={<Editprofile />}></Route>
              <Route exact path='/logout' element={<Logout />}></Route>
              <Route path='*' element={<Error />}></Route>
            </Routes>

          </div>
          </ScrollBar>
        </div>
        <ToastContainer />
      </div>


    </>
  );
}

export default App;
