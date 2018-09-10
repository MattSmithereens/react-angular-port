import React from 'react';

function Welcome() {
    let welcomeStyle = {
        fontFamily: 'sans-serif',
        fontSize: '20px',
        padding: '75px',
        marginTop: '0',
        margin: '0 auto',
        width: '100%'
    };

    return (
        <div  style={welcomeStyle} >
            <h1>Epicodus Tunes</h1>
            <h3>Welcome to our store</h3>
        </div>
    );
}

export default Welcome;
