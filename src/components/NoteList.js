import React from 'react';
import Note from './Note';
import CreateNoteButton from './CreateNoteButton';

const NoteList = function(props){

    const Notes = props.notesData.map(note => 
        <Note key={note.id} active={(note.id===1 ? true : false)}>
            {`${note.id}. ${note.data}`}
        </Note>
    );

    return (
        <aside>
            {Notes}
            <CreateNoteButton/>
        </aside>
    );
}

export default NoteList;