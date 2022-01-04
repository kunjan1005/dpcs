import React from "react";
import logo from '../images/dpcs_logo.png'
import preLoader from '../images/loading.gif'


const Loading = () => {
    return (
        <div className="preloader">
            <img src={preLoader} className="pre-loader"/>
        </div>
    )
}
export default Loading