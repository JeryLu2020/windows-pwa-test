import React, { useState } from 'react';

function GetUsername() {
    // const [username, setUsername] = useState('');

    let style = {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div style={style}>
            <h3>Welcome {localStorage.getItem('loginemail')}</h3>
        </div>
    );
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <GetUsername />
            </div>
        );
    }
}