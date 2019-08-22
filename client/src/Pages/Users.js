import React, { Component } from 'react';
import UsetsTable from './UsersTable';
import { Container } from 'react-bootstrap/Container'

class Users extends Component{
    render(){
        return(
            <div>
                <h1>Users page</h1>
                <UsetsTable/>
            </div>
        );
    }
}

export default Users;