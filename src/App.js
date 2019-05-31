import React from 'react';
import NoteList from './components/NoteList';
import SaveButton from './components/SaveButton';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
                "Notes" : [{
                    id: 1,
                    data: "this is a hello world note"
                },
                {
                    id: 2,
                    data: "this is a second note"
                },
                {
                    id: 3,
                    data: "this is a third note"
                }],
                "activeNote": 1
        };
        this.changeActiveNote = this.changeActiveNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    };

    changeActiveNote(noteID) {
        let editor = document.getElementById('editor');
        editor.value = this.state.Notes[noteID-1].data;

        this.setState({"activeNote": noteID});
    };

    saveNote() {
        let editor = document.getElementById('editor');
        let notes = {...this.state.Notes};
        notes[this.state.activeNote-1].data = editor.value;
        this.setState({notes});
    };

    render() {
        return (
        <div className="grid-container">
            <header>
                <h1><a href="/">Yet Another Notes PWA.</a></h1>
            </header>

            <NoteList 
                notesData={this.state.Notes} 
                activeNote={this.state.activeNote} 
                clickHandler={this.changeActiveNote}/>
            
            <textarea id="editor"></textarea>
            <footer>
                <SaveButton saveNote={this.saveNote}/>
            </footer>
        </div>);
    }
}
export default App;
