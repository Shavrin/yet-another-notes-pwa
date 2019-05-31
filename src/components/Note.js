import React from 'react';

class Note extends React.Component {    
    render(){
        const classes = "note" + (this.props.active ? " active" : "");
        return(
            <div className={classes} onClick={() => this.props.clickHandler(this.props.noteID)}>
                <p className="noteTitle">{this.props.children}</p>
            </div>);
    };
}

export default Note;