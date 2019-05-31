import React from 'react';

const CreateNoteButton = function(props) {
    return (
    <div className="createNoteButton" onClick={props.createNoteHandler}>
        NEW NOTE
    </div>);
};

export default CreateNoteButton;

