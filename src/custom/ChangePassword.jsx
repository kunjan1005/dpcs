import React,{useState} from 'react';
import {toast} from 'react-toastify'
import {isUserLoging} from '../authorization/useAuth'
import axios from 'axios';
import env from '../env';

const ChangePassword = (props) => {
    let [formData,setFormData]=useState({
        current_password:"",
        new_password:"",
        retype_password:""
    })
    const handleChange=(e)=>{
        setFormData((prev)=>{return {...prev,[e.target.name]:e.target.value}})
    }
    const changePassword=(e)=>{
        try{
            e.preventDefault()
          if(formData.new_password!==formData.retype_password){
              toast.error("New password and retype password not match")
          }else{
              let {access_token,user_id,lang}=isUserLoging().user
              delete formData.retype_password
              axios.post(`${env.URL}/dipicious/api/user/change_password`,{...formData,access_token,user_id,lang},{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
              }).then((response)=>{
                if(response.data.flag==1){
                  toast.success(response.data.msg);
                  setFormData({current_password:"",new_password:"",retype_password:""});
                }else{
                    toast.error('Password could not be changed !!');
                }
              })
          }
        }catch(error){
            toast.error(`something went wrong..`);
        }
    }
    return (<>
        <div className="modal fade" id="myModal6" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Change Password</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Password</label>
                                <input type="password" class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name='current_password'
                                value={formData.current_password}
                                onChange={handleChange}/>
                                   
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">New Password</label>
                                <input type="password" class="form-control" 
                                id="exampleInputPassword1"
                                name='new_password'
                                value={formData.new_password}
                                onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Retype Password</label>
                                <input type="password" class="form-control" 
                                id="exampleInputPassword1"
                                name='retype_password'
                                value={formData.retype_password}
                                onChange={handleChange}/>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={changePassword}>Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default ChangePassword;