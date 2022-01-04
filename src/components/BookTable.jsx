import React, { useState } from 'react'
import env from '../env'
import Exit from '@material-ui/icons/Clear'
import { NavLink } from 'react-router-dom'
import { MentionsInput, Mention } from 'react-mentions'

let data = [{ id: 1, name: "barot kunjan" }, { id: 2, name: 'dipak thakor' }]
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
    const [user, setUser] = useState('')
    const [mainendUser, setMentionedUser] = useState([{ id: "", username: "" }])
    
    const onChangeEvent = (e) => {
       let value=e.target.value
       setUser(value)
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
                    <input type="date" className="date-picker" name='datepicker'></input>

                    <select className='guest'>
                        {guest.map((e) => <option value={e}>{e} Guests</option>)}
                    </select>
                </div>
                <select className='guest'>
                    {timeSlot.map((e) => <option value={e}>{e}</option>)}
                </select>
                <select className='location'>
                    <option selected>Select Location</option>
                    <option>sola, Ahmedabad</option>
                </select>
                <div>
                    {/* <textarea className='gowith' placeholder='@Go With'></textarea> */}
                    <div className='description'>
                        <MentionsInput
                            singleLine="false"
                            allowSpaceInQuery="true"
                            value={user}
                            onChange={onChangeEvent}
                            markup='${__id__}'
                            displayTransform={(id) => "${" + id + "}"}
                        >
                            <Mention  data={data} />
                        </MentionsInput>
                    </div>

                    <textarea placeholder='Description' className='description'></textarea>
                </div>
                <button className='btn btn-primary m-auto done d-block'>Done</button>
            </form>
        </div>
    </>)
}
export default BookTable