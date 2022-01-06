import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { isUserLoging } from '../authorization/useAuth'
import env from '../env'
const MentionedBox = (props) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [mention, setMentined] = useState({user_id:"",username:""})
    const onChangeEvent = async (e) => {
        e.preventDefault()
        let value = e.target.value
        let prefix = value.split('@')
        setSearch(e.target.value)
        if (prefix[0] == '') {
            let data = isUserLoging()
            let { user_id, lang, access_token } = data.user
            let jsonData = JSON.stringify({ user_id, lang, access_token, search: prefix[1] })
            let response = await axios.post(`${env.URL}/dipicious/api/user/user_search_table_booking`, jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
            })
            
            setData(response.data.data)
        } else {
            setSearch('')
        }
    }
    const saveMentioned = (id) => {
        setMentined((prev) => {
            let result = data.filter((each) => {
                return each.user_id == id
            })
            return {...prev,user_id:result[0].id,username:result[0].username}
        })
        props.mentioned((prev) => {
            let [result] = data.filter((each) => {
                return each.user_id == id
            })
            return {
                ...prev,
                going_with:mention.username
            }
        })
        setSearch('')
        setData([])
    }
    const cleanMention = (id) => {
        // setMentined((prev) => {
        //     return prev.filter((each) => {
        //         return each.user_id != id
        //     })
        // })
        setMentined({user_id:"",username:""})
        props.mentioned('')
        // props.mentioned((prev) => {
        //     return {
        //         ...prev, going_with: prev.going_with.filter((each) => {
        //             return each != id
        //         })
        //     }
        // })
    }
    const suggestions = () => {
        return data
    }
    return (<>
        <div className='description'>
            <div id="master_div">
                {mention.length != 0 ? <div id="categories">
                    {/* {mention.map((each) => {
                        return <span key={each.user_id}>{each.username}<small onClick={() => cleanMention(each.user_id)}>&times;</small></span>

                    })} */}
                    <span key={mention.user_id}>{mention.username}<small onClick={() => cleanMention()}>&times;</small></span>

                </div> : ''}
                <div id="input">
                    <input type="text"
                        value={search}
                        onChange={onChangeEvent}
                        // onKeyPress={onEnterPress}
                        placeholder='@go with'
                        name={props.name}
                    />
                </div>
                {suggestions().length != 0 ?
                    <div className='suggestions'>
                        <ul>
                            {suggestions().map((sugge) => {
                                return <li onClick={() => saveMentioned(sugge.user_id)} key={sugge.user_id}>{sugge.username}</li>
                            })}
                        </ul>
                    </div>
                    : ''}
            </div>
        </div>
    </>)
}
export default MentionedBox