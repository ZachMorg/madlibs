import React, {useState} from 'react';

//Returns a form that accepts 4 types of words from inputs and submits them through an object
const NewMadlibForm = function({submit}){
    const [formData, setFormData] = useState({
        adjective: '',
        noun: '',
        verb: '',
        noun2: '',
    });

    //updates the inputs everytime they are changed
    const handleChange = function(evt){
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    //sends data to Madlib component and resets the form data
    const submitData = function(evt){
        evt.preventDefault();
        submit({...formData});
        setFormData({
            adjective: '',
            noun: '',
            verb: '',
            noun2: ''
        });
    };

    //returns the form
    return (
        <form onSubmit={submitData}>
            <label htmlFor='adjective'>Adjective:</label>
            <input 
                onChange={handleChange} 
                name='adjective' 
                value={formData.adjective} 
                id='adjective'
            />
            <label htmlFor='noun'>Noun:</label>
            <input 
                onChange={handleChange}
                name='noun'
                value={formData.noun}
                id='noun'
            />
            <label htmlFor='verb'>Past-tense Verb:</label>
            <input
                onChange={handleChange}
                name='verb'
                value={formData.verb}
                id='verb'
            />
            <label htmlFor='noun2'>Noun 2:</label>
            <input 
                onChange={handleChange}
                name='noun2'
                value={formData.noun2}
                id='noun2'
            />
            <button>Submit</button>
        </form>
    );
}

export default NewMadlibForm;