import React, { Component } from 'react';

import classes from './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

class Toolbar extends Component {
    render () { return (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={this.props.clicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
    )};
}

export default Toolbar;