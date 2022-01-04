import React from 'react'
import { useState } from 'react'
const sampleData = [{ id: 1, name: "kunjan" }, { id: 2, name: "raj" }, { id: 3, name: 'kuldeep' }]
const MentionedBox = (props) => {
    const [search, setSearch] = useState('')
    const onChangeEvent = (e) => {
        let value = e.target.value
        let prefix= value.split('@')
        if (prefix[0] == '') {
           setSearch(e.target.value)
        }else{
            setSearch(e.target.value)
        }


    }
    const suggestions = () => {

    }
    return (<>
        <div className='description'>
            <div id="master_div">
                <div id="categories">
                    <span>kunjan <small>&times;</small></span>
                    <span>kunjan <small>&times;</small></span>
                </div>
                <div id="input">
                    <input type="text"
                        value={search}
                        onChange={onChangeEvent}
                        placeholder='@go with'
                        name={props.name}
                    />
                </div>
                <div className='suggestions'>
                    <ul>
                        <li>kunjan</li>
                        <li>kunjan</li>
                        <li>kunjan</li>
                        <li>kunjan</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}
export default MentionedBox