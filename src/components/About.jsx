import React from 'react';
import PropTypes from 'prop-types';

function About(market) {
    let divStyle = {
        fontFamily: 'sans-serif',
        // border: '3px solid grey',
        // width: '25%',
        // display: 'inline-block',
        // margin: '1.5%',
        padding: '10px',
        verticalAlign: 'top',
        // minHeight: '200px',

    };
    return(
        <div style={divStyle}>
            <h1>About Us</h1>
            <p>Epicodus's mission is to help people learn the skills they need to get great jobs. For us, "great jobs" means jobs in growing industries that pay well and provide rewarding work. Beyond the particular skills needed to get these jobs, we also aim to help our students become confident self-teachers who can adapt to changing job markets and great communicators that will work well in teams. We focus on serving people that, by birth or circumstance, don't have easy access to learning the skills they need to get these great jobs. And now we sell music too!</p>
        </div>
    );
}

export default About;
