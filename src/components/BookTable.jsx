import React, { useState } from 'react'
import env from '../env'
import Exit from '@material-ui/icons/Clear'
import { NavLink,useNavigate } from 'react-router-dom'
import MentionedBox from '../custom/MentionedBox'
import axios from 'axios'
import { isUserLoging } from '../authorization/useAuth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from '../actions'
import { toast } from 'react-toastify'



let guest = []
for (let i = 1; i <= 50; i++) { guest.push(i) }
function getTimeRanges(interval, language = window.navigator.language) {
    const ranges = [];
    const date = new Date();
    const format = {
        hour: 'numeric',
        minute: 'numeric',
    };

    for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
        date.setHours(0);
        date.setMinutes(minutes);
        ranges.push(date.toLocaleTimeString(language, format));
    }

    return ranges;
}
let timeSlot = getTimeRanges(30, 'en')

const BookTable = (props) => {
    const [tableDetails, setTableDetails] = useState({
        date: "",
        time: "",
        no_of_people: 0,
        going_with:'',
        description: "",
        location_id: '',
        restaurant_id: props.restaurant_id,
        booking_table_id:''
    })
    let { locations } = useSelector((state) => state.restaurantReducer)
    let dispatch = useDispatch()
    let navigate=useNavigate()
    const onChangeEvent = (e) => {
        setTableDetails((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        dispatch(getLocation(props.restaurant_id))
    }, [1])

    const bookAtable = async (e) => {
        try {
            e.preventDefault()
            let data = isUserLoging()
            let { user_id, lang, access_token } = data.user
            let jsonData = JSON.stringify({ user_id, lang, access_token,...tableDetails})
            let response = await axios.post(`${env.URL}/dipicious/api/user/book_table`, jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
            })
            if(response.data.flag){
                toast.success('table booked successfully...')
                props.state(false)
            }else{
                toast.error("sorry you can't book a table")
            }
        } catch (err) {

        }
    }

    return (<>
        <div className="form-popup py-1">

            <form action="#" className="form-container">
                <span style={{ float: "right" }}><Exit onClick={() => props.state(false)} /></span>
                <h4 className='profile_title'> <img src={`${env.URL}/dipicious/${props.img}`}
                    className=''
                    style={{ width: "8rem", height: '6.5rem', margin: 'auto' }}
                    alt="" />Book a table</h4>
                <hr></hr>
                <div className='d-flex justify-content-between book-table'>
                    <input type="date" className="date-picker"
                        name='date'
                        value={tableDetails.date}
                        onChange={onChangeEvent}></input>

                    <select className='guest' name='no_of_people' value={tableDetails.no_of_people} onChange={onChangeEvent}>
                        {guest.map((e, index) => <option value={e} key={index + 1}>{e} People</option>)}
                    </select>
                </div>
                <select className='guest' name='time' value={tableDetails.time} onChange={onChangeEvent}>
                    {timeSlot.map((e, index) => <option value={e} key={index + 1}>{e}</option>)}
                </select>
                <select className='location' name='location_id' value={tableDetails.location_id} onChange={onChangeEvent}>
                    <option selected>Select Location</option>
                    {locations.map((each) => {
                        return <option value={each.location_id} key={each.location_id}>{each.location_name}</option>
                    })}
                </select>
                <div>
                    {/* <textarea className='gowith' placeholder='@Go With'></textarea> */}
                    <MentionedBox mentioned={setTableDetails} />

                    <textarea placeholder='Description'
                        value={tableDetails.description}
                        className='description'
                        onChange={onChangeEvent}
                        name='description'></textarea>
                </div>
                <button className='btn btn-primary m-auto done d-block' onClick={bookAtable}>Done</button>
            </form>
        </div>
    </>)
}
export default BookTable