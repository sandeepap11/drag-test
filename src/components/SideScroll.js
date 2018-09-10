import React, { Component } from 'react';
import Highlight from './Highlight';
import '../styles/SideScroll.css' ;

class SideScroll extends Component {
    render() {
        return (
            <div className="main-scroller">
                <Highlight/>
                <Highlight/>
                <Highlight/>
                <Highlight/>
                <Highlight/>
                <Highlight/>
                
            </div>
        );
    }
}

export default SideScroll;