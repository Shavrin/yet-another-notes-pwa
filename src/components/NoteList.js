import React from 'react';
import Note from './Note';
import CreateNoteButton from './CreateNoteButton';

const NoteList = function(props){

    const Notes = props.notesData.map(note => 
        <Note 
        key={note.id} 
        clickHandler={props.clickHandler}
        noteID={note.id} 
        active={(note.id===props.activeNote ? true : false)}>
            {`${note.id}. ${note.data}`}
        </Note>
    );

    return (
        <aside>
            {Notes}
            <CreateNoteButton createNoteHandler={props.createNoteHandler}/>
        </aside>
    );
}

export default NoteList;