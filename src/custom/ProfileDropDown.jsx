import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

const ProfileDropDown = () => {
    return (<>
        <div className="dropdown float-right">
            <button className="btn btn-default border dropdown-toggle" type="button" data-toggle="dropdown"><i className="fa fa-user-cog"></i>
                <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li className="text-center"><NavLink to='/logout'>
                    <Button variant='outlined'>Logout</Button>
                </NavLink></li>
                <li className="text-center"><a href="#">React Js</a></li>
            </ul>
        </div>
    </>)
}

export default ProfileDropDown