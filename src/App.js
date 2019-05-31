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
                }]
        }
    };
    render() {
        return (
        <div className="grid-container">
            <header>
                <h1><a href="/">Yet Another Notes PWA.</a></h1>
            </header>

            <NoteList notesData={this.state.Notes}/>
            
            <textarea id="editor"></textarea>
            <footer></footer>
        </div>);
    }
}
export default App;
