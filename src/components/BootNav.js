import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class BootNav extends Component {

    state = {
        selected: 1,
        textValue: ""
    };

    tabChange = (selected) => {
        this.setState({ selected });
    };

    retainValue = (textValue) => {
        this.setState({ textValue });

    };

    render() {

        const { selected, textValue } = this.state;

        return (
            <div>
                <Nav bsStyle="pills" activeKey={selected} onSelect={(eventKey) => this.tabChange(eventKey)}>
                    <NavItem eventKey={1} >
                        NavItem 1 content
                    </NavItem>
                    <NavItem eventKey={2} >
                        NavItem 2 content
                    </NavItem>
                    <NavItem eventKey={3} >
                        NavItem 3 content
                    </NavItem>
                </Nav>
                <div>
                    {selected === 1 && <input type="text" value={textValue} onChange={(event) => this.retainValue(event.target.value)} />}
                    {selected === 2 && "Second"}
                    {selected === 3 && "Third"}
                </div>
            </div>
        );
    }
}
export default BootNav;