import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

class sideDrawer extends Component {
    render () {
        const attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses[1] = classes.Open;
        }
        return (
            <Aux>
                <Backdrop
                    show={this.props.open}
                    clicked={this.props.close}/>
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </Aux>
    );}
}

export default sideDrawer;