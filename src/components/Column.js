import React, { Component } from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;

`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    `;

class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable>
                <TaskList>
                    {this.props.tasks.map(
                        task => <Task key={task.id} task={task}/>
                    )}
                </TaskList>
                </Droppable>
            </Container>
        );
    }
}

export default Column;