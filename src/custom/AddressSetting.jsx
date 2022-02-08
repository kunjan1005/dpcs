import React, { useState } from 'react';
import AddresssBook from '../components/AddressBook';

const AddressBookSetting = (props) => {
    return (<>
        <div className="modal fade" id="myModal10" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Address Book</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <AddresssBook setting={true}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default AddressBookSetting;