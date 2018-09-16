import React, { Component } from 'react';
import DragSortableList from 'react-drag-sortable'
import RowComponent from './RowComponent';

export const values = [
    { id: 1, name: "Lina", team: "Ajax" },
    { id: 2, name: "Lisa", team: "PSV" },
    { id: 3, name: "Lira", team: "Utrecht" },
    { id: 4, name: "Lima", team: "Roda" },
    { id: 5, name: "Lita", team: "Feyenoord" }
];



class DragComponent extends Component {
    onSort = (sortedList, dropEvent) => {
        console.log("sortedList", sortedList, dropEvent);
     }

     state = {
        items: values.map((value, index) => (
            {content: (<RowComponent row={value} deleteRow={this.deleteRow} />)}
        )),
        itemValues: values
    };
     

    render() {
        const placeholder = (
            <div className="placeholderContent"></div>
        );

        return (
            <div>
                <DragSortableList items={this.state.items} placeholder={placeholder} onSort={this.onSort} dropBackTransitionDuration={0.3} type="vertical" />
            </div>
        );
    }
}

export default DragComponent;