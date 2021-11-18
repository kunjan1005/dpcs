import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className='container-fluid'>
                <h3>404 page not found</h3>
                <NavLink to='/'>go back to home page</NavLink>

            </div>
        </>
    )
}
export default Error