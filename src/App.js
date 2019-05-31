import React from 'react';
import NoteList from './components/NoteList';

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
    };

    changeActiveNote(noteID) {
        this.setState({"activeNote": noteID});
    };

    render() {
        return (
        <div className="grid-container">
            <header>
                <h1><a href="/">Yet Another Notes PWA.</a></h1>
            </header>

            <NoteList notesData={this.state.Notes} activeNote={this.state.activeNote} clickHandler={this.changeActiveNote}/>
            
            <textarea id="editor"></textarea>
            <footer></footer>
        </div>);
    }
}
export default App;
