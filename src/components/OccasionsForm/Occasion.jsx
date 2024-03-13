import axios from 'axios';
import { useEffect, useState } from 'react';




function Occasion(){

    const fetchOccasions = () => {
        axios({
            method: 'GET',
            url: 'api/occasion'
        })
        .then(
            response => {
                console.log("Data in response from server:", response.data);
                setOccasionsList(response.data);

            })
        .catch(
            error => {
                console.log('Error on Occasion GET request', error)
            })
    };

    useEffect(
        fetchOccasions, []
    );


    //Track data for display
    const [occasionsList, setOccasionsList] = useState([]);

    //Track user input
    const [newOccasionName, setNewOccasionName] = useState('');
    const [newOccasionNotes, setNewOccasionNotes] = useState ('');

 
    
    return (
        <>
            <header>
                <h1>First Name's Occasions</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Occasion</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {occasionsList.map(occasion => (
                        <tr key = {occasion.id}>
                            <td>{occasion.name}</td>
                            <td>{occasion.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )

}