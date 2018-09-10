import React, { Component } from 'react';

class ChildrenTest extends Component {
    render() {

        let listKey = 0;
        return (
            <div>
                {this.props.children.map(
                    child => <li key={listKey ++}>{child}</li>
                )}
            </div>
        );
    }
}

export default ChildrenTest;