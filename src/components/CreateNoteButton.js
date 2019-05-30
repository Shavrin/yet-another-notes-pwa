import React from 'react';

const CreateNoteButton = function(props) {
    function handleClick(e) {
        e.preventDefault();
        alert("Clicked!");        
    };

    return (
    <div className="createNoteButton" onClick={handleClick}>
        NEW NOTE
    </div>);
};

export default CreateNoteButton;

