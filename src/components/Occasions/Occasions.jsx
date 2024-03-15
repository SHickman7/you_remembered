import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Occasions(){

const [occasion_name, setOccasion_name] = useState("");
const [occasion_notes, setOccasion_notes] = useState("");
const dispatch = useDispatch();
const occasions = useSelector(store => store.occasion);

useEffect(() => {
    dispatch({ type: 'FETCH_OCCASIONS' });
  }, [dispatch]);

  const addOccasion = (event) => {
    event.preventDefault();
    dispatch({
        type: 'ADD_OCCASION',
        payload: {
            occasion_name: occasion_name,
            occasion_notes: occasion_notes
        },
    });
    clearOccasionFields();
  };

  const clearOccasionFields = () => {
    setOccasion_name("");
    setOccasion_notes("");
  }

  const deleteOccasion = (id) =>{
    console.log('id', id);
    dispatch({
        type: 'DELETE_OCCASION',
        payload: id,
    });
  };

  const renderOccasions = () => {
    if (occasions.length > 0){
        return(
            <>
                <table>
                <thead>
                    <tr>
                        <th>Occasion</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {occasions.map((occasion) => (
                        <tr key = {occasion.id}>
                            <td>{occasion.occasion_name}</td>
                            <td>{occasion.occasion_notes}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => deleteOccasion(occasion.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </>
        )} else {
            return <h3>You currently have no occasions</h3>
        }
  }

    return(
        <>
         <form onSubmit={addOccasion}>
            <input onChange={(event) => setOccasion_name(event.target.value)}
                value={occasion_name}
                placeholder="Occasion Name" />
            
            <input onChange={(event) => setOccasion_notes(event.target.value)}
                value={occasion_notes}
                placeholder="Occasion Notes" /> 
            
            <button type="submit">Add Occasion</button>

        </form>
        {renderOccasions()}
        </>
    )
}

export default Occasions;