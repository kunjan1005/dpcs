import React from "react";
import logo from '../images/dpcs_logo.png'
import preLoader from '../images/depicious.gif'


const Loading = () => {
    return (
        // <div className='loading'>


        //     <div className='loader'>
      
                
        //     </div>

        // </div>
        <div className="preloader">
            <img src={preLoader} className="pre-loader"/>
        </div>
    )
}
export default Loading