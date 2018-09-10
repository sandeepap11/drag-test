import React, { Component } from 'react';
import '../styles/Highlight.css';

const image = "https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/5356759/2018/5/17/924cc44f-3ea3-478f-8c77-653863e749251526543948152-Diana-Korr-Red-Solid-Handheld-Bag-with-Sling-Strap-9721526543948101-6.jpg";

class Highlight extends Component {
    render() {
        return (
            <div className="main-box">
                <h1>This will be a prop</h1>
                <img className="image" alt="bag-lady" src={image}></img>
                <p>The tagline</p>
            </div>
        );
    }
}

export default Highlight;