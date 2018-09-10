import React, { Component } from 'react';
import '../styles/RowComponent.css';

class RowComponent extends Component {

    deleteFunction = () => {
        console.log("Hello");
        
        if(this.props.deleteRow)
        this.props.deleteRow(this.props.row.id);
    };

    render() {
        const {row, part, all} = this.props;
        
        
        
        return [
           
            (all || part === "first") && <td key={0} style={{backgroundColor: "blue"}} className="column">{row.id}</td>,
            (all || part === "first") && <td key={1} style={{backgroundColor: "yellow"}} className="column">{row.name}</td>,
            (all || part === "first") && <td key={2} style={{backgroundColor: "green"}} className="column">{row.team}</td>,
            (all || part === "second") && <td key={3}  style={{backgroundColor: "blue"}} className="column" onClick={this.deleteFunction}>Delete Me</td>                
           
        ];
    }
}

export default RowComponent;