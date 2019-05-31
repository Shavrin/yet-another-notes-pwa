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
        this.createNote = this.createNote.bind(this);
    };
    createNote(){
        let Notes = [...this.state.Notes];
        Notes[Object.keys(Notes).length] = {id: Object.keys(Notes).length+1, data: ""};
        console.log(Notes);
        this.setState({"Notes": Notes});
    }
    componentDidMount(){
        document.getElementById("editor").value = this.state.Notes[this.state.activeNote-1].data;
    };

    changeActiveNote(noteID) {
        let editor = document.getElementById('editor');
        editor.value = this.state.Notes[noteID-1].data;

        this.setState({"activeNote": noteID});
    };

    saveNote() {
        let editor = document.getElementById('editor');
        let Notes = [...this.state.Notes];
        Notes[this.state.activeNote-1].data = editor.value;
        this.setState({"Notes": Notes}, ()=>console.log(this.state));
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
                clickHandler={this.changeActiveNote}
                createNoteHandler={this.createNote}/>
            
            <textarea id="editor"></textarea>
            <footer>
                <SaveButton saveNote={this.saveNote}/>
            </footer>
        </div>);
    }
}
export default App;
