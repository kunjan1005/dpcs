import React from "react"
import { NavLink } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";

const ItemDetail = () => {
    return (<>
        <div className="container py-3">
            <div className="row_">
                <h1 className="text-center bg-danger text-white">Item Details</h1>
                <div className="item-detail mt-5">
                    <h5 className="text-danger">Test</h5>
                    <hr className="" />
                    <div className="">
                        <p>Test Item<span className="float-right">KD 1.000</span></p>
                    </div>
                </div>
                <div className="special-req mt-5">
                    <h5 className="text-danger mt-5">SPECIAL REQUEST <span className="text-grey"><p>(optional)</p></span></h5>
                    <hr className="" />
                    <textarea className="req-notes" placeholder="Request here"></textarea>
                </div>

                <div className="quantity_ mt-5">
                    <h5 className="text-danger">QUANTITY
                        <span className="float-right">
                            <div class="quantity">
                                <a href="#" class="quantity__minus"><span>-</span></a>
                                <input name="quantity" type="text" class="quantity__input" value={1} />
                                <a href="#" class="quantity__plus" ><span>+</span></a>
                            </div>
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    </>)
}
export default ItemDetail