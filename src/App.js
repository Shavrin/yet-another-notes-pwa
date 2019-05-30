import React from 'react';
import NoteList from './components/NoteList';

const App = function(){
    return (
    <div className="grid-container">
        <header>
            <h1><a href="/">Yet Another Notes PWA.</a></h1>
        </header>

        <NoteList/>
        
        <textarea id="editor" contentEditable></textarea>
        <footer></footer>
    </div>);
}
export default App;
