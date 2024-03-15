import React, {useState} from 'react';
import NewMadlibForm from './NewMadlibForm';

//Displays either the form or story and holds logic for submitting and resetting
const Madlib = function(){
    //Object for holding the types of words and their values
    const [words, setWords] = useState({});
    //Boolean for determining which HTML to return
    const [showStory, setShowStory] = useState(false);

    //Accepts the words from the form and returns the story with those words
    const submit = function(wordObj){
        setWords(wordObj);
        setShowStory(true);
    }

    //Resets the word object and returns the form
    const reset = function(){
        setWords({});
        setShowStory(false);
    }

    //Returns the story
    if(showStory){
        return(
            <div>
                <p>The {words.adjective} students were disappointed when the school {words.noun} {words.verb} and was replaced by a {words.noun2}</p>
                <button onClick={reset}>Reset</button>
            </div>
        );
    };

    //Returns the form
    return(
        <div>
            <NewMadlibForm submit={submit}/>
        </div>
    )
}

export default Madlib;