import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import StoreRecipi from "../common/StoreRecipi";
import logo from '../images/salad.png'
import RecipiDetail from '../custom/RecipiDetail';
import env from '../env'
const ChefRecipi = (props) => {
    let [show,setShow]=useState(false);
    return (<>
        {show?<RecipiDetail close={setShow}/>:null}
        <div className="container">
            {props.data.map((item, index) => {
                 return <div className="row mt-1 border bg-white" 
                 key={item.cuisine_id} onClick={()=>{
                     
                 }}>
                    <h6 className="col-lg-11 col-10">{item.name}</h6>
                    <img src={`${env.URL}/dipicious/${item.icon}`} className='profile_pick col-1' style={{float:'right'}}/>
                    <div className='row'>
                        <StoreRecipi data={item.recipe_data}
                        open={setShow}/>
                        <p style={{ float: "right" }}>See more</p>
                    </div>
                </div>
            })}
        </div>
        </>
    )
}
export default ChefRecipi;