import React from 'react'
import env from '../env'


const BookTable = (props) => {
    return (<>
        <div className="form-popup py-1">
            <form action="#" className="form-container">
               
                <h4 className='profile_title'> <img src={`${env.URL}/dipicious/${props.img}`}
                    className=''
                    style={{ width: "8rem", height: '6.5rem', margin: 'auto' }}
                    alt="" />Book a table</h4>
                <hr></hr>
                <div className='d-flex justify-content-between book-table'>
                    <input type="date" className="date-picker" name='datepicker'></input>
                    <select className='guest'>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                    </select>
                </div>
                <input type='time' className='time'></input>
                <select className='location'>
                    <option selected>Select Location</option>
                    <option>sola, Ahmedabad</option>
                </select>
                <div>
                    <textarea className='gowith' placeholder='@Go With'></textarea>
                    <textarea placeholder='Description' className='description'></textarea>
                </div>
                <button className='btn btn-primary m-auto done d-block'>Done</button>
            </form>
        </div>
    </>)
}
export default BookTable