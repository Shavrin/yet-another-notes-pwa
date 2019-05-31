import React from 'react';

const SaveButton = function (props) {
    return (<div className="saveButton" onClick={props.saveNote}>SAVE</div>);
}

export default SaveButton;