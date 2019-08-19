import React, { Component } from 'react';
import UsetsTable from './UsersTable';

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