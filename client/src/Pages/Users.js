import React, { Component } from 'react';
import UsetsTable from './UsersTable';
import Error from './Error';
import { Container } from 'react-bootstrap';

function CheckLogin() {
    // check if use email is stored in browser, if so then user has logged in and redirect to home page
    if(localStorage.getItem('loginemail')){ 
        return <UsetsTable />
    } else {
        return <Error />       // user not logged in, redirect to error page
    }
}

class Users extends Component{
    render(){
        return(
            <Container fluid>
                <CheckLogin />
            </Container>
        );
    }
}

export default Users;