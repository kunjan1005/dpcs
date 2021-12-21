import { Delete } from "@material-ui/icons";
import React from "react";

const CartList = () => {
    return (<>
     
            
        <div class="Cart-Items">
            <div class="image-box">
                <img src="data:image/jpeg;base64,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" style={{ height: "85px" }} />
            </div>
            <div class="about">
                <h4 class="title">Apple Juice</h4>
                <h5 class="subtitle mt-3">250ml</h5>
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
        <hr />
    </>)
}
export default CartList