import React, { Component } from 'react';
import axios from 'axios'

// TO DO: SHOW ALL USERS (we need axios to communicate with our backend)
 // : CREATE FROM TO CREATE USER

class LogInPage extends Component {

    getAllUsers = () => {
        axios.get('http://localhost:3001/api/users').then((response) =>{
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h1>Log-In To See Your Ideas</h1>
                <h3>All Users:</h3>
            </div>
        );
    }
}

export default LogInPage;