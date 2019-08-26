import React, { Component } from 'react';
import UsetsTable from './UsersTable';
import Error from './Error';

function CheckLogin() {
    if(localStorage.getItem('loginemail')){
        return <UsetsTable />
    } else {
        return <Error />
    }
}



class Users extends Component{
    render(){
        return(
            <CheckLogin />
        );
    }
}

export default Users;