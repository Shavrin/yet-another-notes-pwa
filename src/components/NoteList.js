import React from 'react';
import Note from './Note';
import CreateNoteButton from './CreateNoteButton';

const NoteList = function(props){

    const notesData = [
        {
            id: 1,
            data: "this is a hello world note"
        },
        {
            id: 2,
            data: "this is a second note"
        }
    ];

    const Notes = notesData.map(note => <Note>{`${note.id}. ${note.data}`}</Note>);

    return (
        <aside>
            {Notes}
            <CreateNoteButton/>
        </aside>
    );
}

export default NoteList;