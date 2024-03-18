import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditOccasionForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const editOccasion = useSelector((store) => store.editOccasion);

  function handleChange(event, key) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: {
        property: key, value: event.target.value
      }
    });

  }

  // function handleChange(event) {
  //   dispatch({ 
  //               type: 'EDIT_ONCHANGE', 
  //               payload: { 
  //                 property: 'favorite_food', value: event.target.value }
  //           });

  // }

  // Called when the submit button is pressed
  function handleSubmit(event) {
    event.preventDefault();

    // PUT REQUEST to /occasions/:id
    axios.put(`/api/occasion/${editOccasion.id}`, editOccasion)
      .then(response => {
        // clean up reducer data            
        dispatch({ type: 'EDIT_CLEAR' });

        // refresh will happen with useEffect on Home
        history.push('/'); // back to list
      })
      .catch(error => {
        console.log('error on PUT: ', error);
      })

  };


  return (
    <>
      <h2>Edit Occasion</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event, 'occasion_name')}
          placeholder='Occasion Name'
          value={editOccasion.occasion_name}
        />
        <input
          onChange={(event) => handleChange(event, 'occasion_notes')}
          placeholder='Occasion Notes'
          value={editOccasion.occasion_notes}
        />
        <input type='submit' value='Update Occasion' />
      </form>
    </>
  );
}

export default EditOccasionForm;