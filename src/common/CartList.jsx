import { Delete } from "@material-ui/icons";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import env from "../env";
import { incrementOrderQty, decrementOrderQty } from '../actions/index'

const CartList = () => {
    let state = useSelector((state) => state.cartReducer)
    let dispatch=useDispatch()

    return (<>
        {state.item.map((each) => {
            return <>
                <div className="Cart-Items">
                
                    <div className="image-box col-lg-2 col-sm-2">
                        <img src={`${env.URL}/dipicious/${each.image}`} style={{ height: "85px" }} />
                    </div>
                    <div className="about col-lg-8 col-sm-8">
                        <h4 className="title">{each.item_detail.item_name}</h4>
                        <h5 className="subtitle mt-3">{each.item_detail.description}</h5>
                        <h6 className="subtitle mt-1">{each.item_detail.item_price} KD</h6>

                    </div>
                    <div className="quantity col-lg-2 col-sm-8">
                        <a href="#" className="quantity__minus" onClick={()=>dispatch(decrementOrderQty(each.cart_id))}><span>-</span></a>
                        <input name="quantity" type="text" className="quantity__input" value={each.quantity==0?1:each.quantity} />
                        <a href="#" className="quantity__plus" onClick={()=>dispatch(incrementOrderQty(each.cart_id))} ><span>+</span></a>
                    </div>
                    
                </div>
          
                
            </>
        })}
    </>)
}
export default CartList