import React, { Component } from 'react';
import serialize from 'form-serialize';
import DnDComponent from './DnDComponent';

class Login extends Component {

    validate = (event) => {
        event.preventDefault();

        var formdata = serialize(event.target, { hash: true });
        console.log(formdata);
        const { username, password } = formdata;
        if (username === "admin" && password === "admin") {
            this.setState({ loggedIn: true });
            document.cookie = `username=${username}`;

        }
    };

    logOut = () => {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        this.setState({ loggedIn: false });
    };

    getCookie = (name) => {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }

    state = {
        loggedIn: false
    };

    render() {

        console.log("All of state", this.state);
        console.log("All of cookies", document.cookie);
        let cookiesSet = false;
        if (document.cookie.includes("username")) {
            cookiesSet = true;
        }
        const { loggedIn } = this.state;
        const username = this.getCookie("username");
        console.log("Username", username);


        return (
            (!loggedIn && !cookiesSet) ? <div key={0}>

                <form style={{ display: "flex", flexDirection: "column", width: "500px", margin: "200px" }}
                    onSubmit={(event) => this.validate(event)}>
                    <input style={{ marginBottom: "10px" }} type="text" name="username" />
                    <input style={{ marginBottom: "10px" }} type="password" name="password" />
                    <button>Log In</button>
                </form>
            </div>
                :
                [
                    <button key={1} onClick={this.logOut}>Log Out</button>,
                    <DnDComponent key={2} />
                ]

        );
    }
}

export default Login;