import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 8px;
    background-color: ${props => props.isDragDisabled ? "lightgrey" : (props.isDragging ? "lightgreen" : "white")};
    display: flex;
    
`;

const Handle = styled.div`
    height: 20px;
    width: 20px;
    background-color: orange;
    margin-right: 8px;
    border-radius: 4px;
`;

class Task extends Component {
    render() {

        const isDragDisabled = this.props.task.id === "task-1";

        return (
            <Draggable draggableId={this.props.task.id}
            index={this.props.index}
            isDragDisabled={isDragDisabled}
            >
                {
                    (provided, snapshot) => (
                        <Container
                        {...provided.draggableProps}
                        
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        isDragDisabled={isDragDisabled}
                        >
                        <Handle {...provided.dragHandleProps}/>
                            {this.props.task.content}
                        </Container>
                    )

                }

            </Draggable>
        );
    }
}

export default Task;