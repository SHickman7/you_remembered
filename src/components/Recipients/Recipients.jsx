import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Recipients (){

const [recipient_fullname, setRecipient_fullname] = useState("");
const [recipient_phone, setRecipient_phone] = useState("");
const [recipient_email, setRecipient_email] = useState("");
const [recipient_address, setRecipient_address] = useState("");
const [recipient_notes, setRecipient_notes] = useState("");
const dispatch = useDispatch();
const recipients = useSelector(store => store.recipient);

useEffect(() => {
    dispatch({ type: 'FETCH_RECIPIENTS' });
  }, [dispatch]);

  const addRecipient = (event) => {
    event.preventDefault();
    dispatch({
        type: 'ADD_RECIPIENT',
        payload: {
            recipient_fullname: recipient_fullname,
            phone_number: recipient_phone,
            email: recipient_email,
            address: recipient_address,
            recipient_notes: recipient_notes
        },
    });
    clearRecipientFields();
  };

  const clearRecipientFields = () => {
    setRecipient_fullname("")
    setRecipient_phone("")
    setRecipient_email("")
    setRecipient_address("")
    setRecipient_notes("")
  };

  const deleteRecipient = (id) =>{
    console.log('id', id);
    dispatch({
        type: 'DELETE_RECIPIENT',
        payload: id,
    });
  };

  const renderRecipients = () => {
    if (recipients.length > 0){
        return(
            <>
                <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {recipients.map((recipient) => (
                        <tr key = {recipient.id}>
                            <td>{recipient.recipient_fullname}</td>
                            <td>{recipient.phone_number}</td>
                            <td>{recipient.email}</td>
                            <td>{recipient.address}</td>
                            <td>{recipient.recipient_notes}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => deleteRecipient(recipient.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </>
        )} else {
            return <h3>You currently have no recipients</h3>
        }
  }

    return(
        <>
         <form onSubmit={addRecipient}>
            <input onChange={(event) => setRecipient_fullname(event.target.value)}
                value={recipient_fullname}
                placeholder="Full Name" />
            
            <input onChange={(event) => setRecipient_phone(event.target.value)}
                value={recipient_phone}
                placeholder="Phone Number" /> 

            <input onChange={(event) => setRecipient_email(event.target.value)}
                value={recipient_email}
                placeholder="Email Address" /> 
            
            <input onChange={(event) => setRecipient_address(event.target.value)}
                value={recipient_address}
                placeholder="Address" /> 

            <input onChange={(event) => setRecipient_notes(event.target.value)}
                value={recipient_notes}
                placeholder="Notes" /> 
            
            <button type="submit">Add Recipient</button>

        </form>
        {renderRecipients()}
        </>
    )
}

export default Recipients;