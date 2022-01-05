import React from 'react'
import { useState } from 'react'
const sampleData = [{ id: 1, name: "kunjan" }, { id: 2, name: "raj" }, { id: 3, name: 'kuldeep' }]
const MentionedBox = (props) => {
    const [data,setData]=useState(sampleData)
    const [search, setSearch] = useState('')
    const [mention, setMentined] = useState([{id:"",name:""}])
    const onChangeEvent = (e) => {
        let value = e.target.value
        let prefix = value.split('@')
        if (prefix[0] == '') {
            setSearch(e.target.value)
        } else {
            setSearch('')
        }
    }
    const onEnterPress = (e) => {
    //     if (e.key == 'Enter') {
    //         e.preventDefault()
    //         setMentined((prev) => {
    //             return [...prev, search]
    //         })
    //         setSearch('')
            
    //     }
    }
    const saveMentioned=(id)=>{
        alert(id)
       setMentined(()=>{
          return data.map((each)=>{
              return each.id==id
          })
       })
    }
    const suggestions = () => {
       return sampleData.filter((each,index)=>{
               let pattern=`*${search}*`
               return pattern.match(each.name);   

       })
    }
    return (<>
        <div className='description'>
            <div id="master_div">
                <div id="categories">
                    {mention.map((each, index) => {
                        return <span key={index}>{each}<small>&times;</small></span>

                    })}

                </div>
                <div id="input">
                    <input type="text"
                        value={search}
                        onChange={onChangeEvent}
                        onKeyPress={onEnterPress}
                        placeholder='@go with'
                        name={props.name}
                    />
                </div>
                {suggestions().length!=0?
                <div className='suggestions'>
                    <ul>
                       {suggestions().map((sugge,index)=>{
                           return  <li onClick={()=>saveMentioned(sugge.id)}>{sugge.name}</li>
                       })}
                    </ul>
                </div>
                :''}
            </div>
        </div>
    </>)
}
export default MentionedBox