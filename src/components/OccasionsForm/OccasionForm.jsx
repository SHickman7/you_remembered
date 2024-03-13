import React, { useState } from 'react';


function OccasionForm ({ addOccasion, }){
    
    const [occasion, setOccasion] = useState( {occasions_name: ''});
    const [occasionNotes, setOccasionNotes] = useState( {occasions_notes: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        addOccasion(occasion, occasionNotes);
        clearOccasionFields();
    }

    const clearOccasionFields = () => {
        setOccasion ({ occasions_name: ''})
        setOccasionNotes ({occasions_notes: ''})
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setOccasion({occasion_name: event.target.value})}
                value={occasion.occasions_name}
                placeholder="Occasion Name" />
            
            <input onChange={(event) => setOccasionNotes({occasion_notes: event.target.value})}
                value={occasionNotes.occasions_notes}
                placeholder="Occasion Notes" /> 

        </form>
    )
}

export default OccasionForm;