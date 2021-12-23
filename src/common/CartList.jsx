import { Delete } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import env from "../env";

const CartList = () => {
    let state=useSelector((state)=>state.cartReducer)

    return (<>
     
        {state.item.map((each)=>{
            return <>        <div class="Cart-Items">
            <div class="image-box">
                <img src={`${env.URL}/dipicious/${each.image}`} style={{ height: "85px" }} />
            </div>
            <div class="about">
                <h4 class="title">{each.item_detail.item_name}</h4>
                <h5 class="subtitle mt-3">{each.item_detail.description}</h5>
                <h6 class="subtitle mt-1">{each.item_detail.item_price} KD</h6>

                {/* <img src="images/veg.png" style={{ height:"30px" }}/> */}
            </div>
            <div class="counter"></div>
            <div class="prices"></div>
            <div class="quantity">
                <a href="#" class="quantity__minus"><span>-</span></a>
                <input name="quantity" type="text" class="quantity__input" value={1} />
                <a href="#" class="quantity__plus" ><span>+</span></a>
            </div>
        </div>
        <button className="btn btn-danger"><Delete/></button>
        <hr /></>
        })}
    </>)
}
export default CartList