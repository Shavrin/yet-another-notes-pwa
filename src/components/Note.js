import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'active': this.props.active
        };
    };
    
    render(){
        const classes = "note" + (this.state.active ? " active" : "");

        return(
            <div className={classes} onClick={() => {console.log(this.props.children)}}>
                <p className="noteTitle">{this.props.children}</p>
            </div>);
    };
}

export default Note;