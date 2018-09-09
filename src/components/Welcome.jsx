import React from 'react';

function Welcome() {
    let welcomeStyle = {
        fontSize: '150px',
        textAlign: 'center',
        marginTop: '0',
        position: 'absolute',
        top: '40%',
        margin: '0 auto',
        width: '100%'
    };
    let welcomeDivStyle = {
        height: '100%',
        backgroundImage: 'url(\'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\')',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    };
    return (
        <div style={welcomeDivStyle}>
            <h1 style={welcomeStyle}>Welcome to the Pharm</h1>
        </div>
    );
}

export default Welcome;