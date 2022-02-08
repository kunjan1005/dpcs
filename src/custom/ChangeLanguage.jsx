import React,{useState} from 'react';
import {toast} from 'react-toastify'
import {isUserLoging} from '../authorization/useAuth'
import axios from 'axios';
import env from '../env';

const ChangeLanguage = (props) => {
    let {access_token,user_id,lang}=isUserLoging().user
    const changelanguge=(e)=>{
        try{
              
             axios.post(`${env.URL}/dipicious/api/user/change_lang`,{access_token,user_id,lang,flag:e.target.value},{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
              }).then((response)=>{
                if(response.data.flag!=1){
                  toast.error('Language not changed..')
                }
              })
          
        }catch(error){
            toast.error(`something went wrong..`);
        }
    }
    return (<>
        <div className="modal fade" id="myModal8" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Change Language</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Select Language</label>
                                <select className='form-control' onChange={changelanguge}>
                                    <option selected disabled>Select language</option>
                                    <option value='1'>English</option>
                                    <option value='0'>Arabic</option>
                                </select>
                            </div>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default ChangeLanguage;