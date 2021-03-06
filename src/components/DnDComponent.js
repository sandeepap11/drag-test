import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { values } from './DragComponent';
import RowComponent from './RowComponent';



// // fake data generator
// const getItems = count =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k}`,
//         content: `item ${k}`,
//     }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    maxWidth: "550px",
    display: "flex",

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables

    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    //background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    maxWidth: "550px",
});

class DnDComponent extends Component {

    addEmpty = () => {


        const emptyValue = { id: this.state.items.length + 1, name: "Bira", team: "Twente" };

        this.setState(
            {
                items: this.state.items.concat(
                    {
                        content: (<RowComponent row={emptyValue} deleteRow={this.deleteRow} part="first" />),
                        deleteBox: (<RowComponent row={emptyValue} deleteRow={this.deleteRow} part="second" />),
                        id: emptyValue.id - 1,
                        value: emptyValue
                    }
                )
            }
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            items: values.map((value, index) => (
                {
                    content: (<RowComponent row={value} deleteRow={this.deleteRow} part="first" />),
                    deleteBox: (<RowComponent row={value} deleteRow={this.deleteRow} part="second" />),
                    id: index,
                    value
                }
            )),
            //items: getItems(10),

        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        const {destination, source} = result;

        if(!destination){
        return;}

        if(destination.droppableId === source.droppableId &&
        destination.index === source.index) {
            return;
        }
       

        const items = reorder(
            this.state.items,
            source.index,
            destination.index
        );

        console.log("Pre drag", this.state.items.map(item => item.value));

        console.log("Post drag", items.map(item => item.value));



        this.setState({
            items,
        });
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {

        const { items } = this.state;

        console.log("State in fender bender render", items);



        return [
            <table key={2} style={{ maxWidth: "550px" }} >
                <thead style={{ width: "100%" }}>
                    <tr >
                        <th className="column">Serial</th>
                        <th className="column">L Woman</th>
                        <th className="column">Dutch Club</th>
                        <th className="column">Dutch Handle</th>
                        <th className="column">Done</th>
                    </tr>
                </thead>
            </table>,
            <DragDropContext key={0} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <table 
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >


                            <tbody style={{ width: "100%" }}>
                                {this.state.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <tr
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                isDragging={snapshot.isDragging}

                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >

                                                {item.content}
                                                <td {...provided.dragHandleProps}
                                                    style={{

                                                        backgroundColor: "orange",
                                                        borderRadius: "4px",
                                                        marginRight: "0"
                                                    }} className="column">DRAG HERE</td>
                                                {item.deleteBox}
                                            </tr>
                                        )}
                                    </Draggable>
                                ))

                                }
                            </tbody>

                            {provided.placeholder}
                        </table>
                    )}
                </Droppable>
            </DragDropContext>,
            <button key={1} onClick={this.addEmpty}>A Freaking Button</button>
        ]
    }
}

export default DnDComponent;
