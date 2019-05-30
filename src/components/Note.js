import React from 'react';

const Note = function(props) {
    return (
        <div className="note">
            <p className="noteTitle">{props.children}</p>
        </div>
    );
}

export default Note;