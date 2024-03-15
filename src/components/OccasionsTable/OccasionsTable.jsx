// import axios from 'axios';
// import { useEffect, useState } from 'react';




// function OccasionsTable(){

//     const fetchOccasions = () => {
//         axios({
//             method: 'GET',
//             url: 'api/occasion'
//         })
//         .then(
//             response => {
//                 console.log("Data in response from server:", response.data);
//                 setOccasionsList(response.data);

//             })
//         .catch(
//             error => {
//                 console.log('Error on Occasion GET request', error)
//             })
//     };

//     useEffect(
//         fetchOccasions, []
//     );


//     //Track data for display
//     const [occasionsList, setOccasionsList] = useState([]);
//     const [editId, setEditId] = useState(-1);

//     //Track user input
//     const [newOccasionName, setNewOccasionName] = useState('');
//     const [newOccasionNotes, setNewOccasionNotes] = useState ('');


 
//     const addOccasion = (event) => {
//         event.preventDefault()

//         axios({
//             method: 'POST',
//             url: '/api/occasion',
//             data: {
//                 occasion_name: newOccasionName,
//                 occasion_notes: newOccasionNotes,
//             }
//         })
//         .then(response => {
//             setNewOccasionName('');
//             setNewOccasionNotes('');
//             fetchOccasions();
//         })
//         .catch(
//             error => {
//                 console.log('Error with PUT request', error);
//             }
//         )
//     }


    

//             // axios({
//             //     method: 'DELETE',
//             //     url: `/api/occasion/${id}`
//             // })
//             // .then(response => {
//             //     fetchOccasions();
//             // })
//             // .catch(
//             //     error => {
//             //         console.log('Error with DELETE request', error);
//             //     }
//             // )
        
        
        
    

//     const handleEdit = (id) => {
//         setEditId(id)
//     }

//     const handleUpdate = () => {
//         axios({
//             method: 'PUT',
//             url: '/api/occasion/id',
//             data: {
//                 id: editId,
//                 occasion_name,
//                 occasion_notes
//             }
//         })
//     }


//     return (
//         <>
//             <header>
//                 <h1>First Name's Occasions</h1>
//             </header>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Occasion</th>
//                         <th>Notes</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {occasionsList.map((occasion) => (
//                         occasion.id === editId ?
//                         <tr>
//                             <td><input type="text" value={occasion.occasion_name} onChange={(event) => setNewOccasionName(event.target.value)}/></td>
//                             <td><input type="text" value={occasion.occasion_notes} onChange={(event) => setNewOccasionNotes(event.target.value)}/></td>
//                             <td><button onClick>{handleUpdate}</button></td>
//                         </tr>
//                         :
//                         <tr key = {occasion.id}>
//                             <td>{occasion.occasion_name}</td>
//                             <td>{occasion.occasion_notes}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(occasion.id)}>Edit</button>
//                                 <button>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <form onSubmit={addOccasion}>
//             <label htmlFor='occasion name'>Occasion Name</label>
//             <input id="name" value ={newOccasionName} onChange={(event) => setNewOccasionName(event.target.value)} placeholder='Occasion Name' />
//             <label htmlFor='occasion notes'>Occasion Notes</label>
//             <input id="occasion notes" value={newOccasionNotes} onChange={(event) => setNewOccasionNotes(event.target.value)} placeholder='Occasion Notes' />
//             <button type="submit">Add Occasion</button>
//             </form>

//         </>
//     )
// }

//     export default OccasionsTable;