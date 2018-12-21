import React, { Component } from 'react';

import classes from './Logo.css';
import Logo from '../../assets/images/burger-logo.png';

class logo extends Component {
    render(){
        return (
            <div className={classes.Logo}>
                <img src={Logo} alt="MyLogo"/>
            </div>
        );
    }
}

export default logo;