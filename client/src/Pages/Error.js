import React from 'react';

export default class Error extends React.Component {
    render() {
        const style = {
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return (
            <div style={style}>
                <h3>Sorry, this site is for Admin only</h3>
            </div>
        );
    }
}