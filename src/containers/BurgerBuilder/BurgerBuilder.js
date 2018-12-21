import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 1.5
}

class BurgerBuilder extends Component {

    constructor(props){
        super(props)
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            initialPrice: 4,
            purchasing: false
        }
    }

    addIngredientHandler = type => {
        const count = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;
        
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] === 0) return;
        const count = this.state.ingredients[type]- 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;
        
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    purchaseable = () => {
        if (this.state.totalPrice === this.state.initialPrice) return true;

        return false;
    }

    purchaseHandler = () => {
        this.setState ({purchasing: true});
    }

    cancelOrder = () => {
        this.setState({ purchasing: false });
    }

    confirmOrder = () => {
        console.log('confirmou');
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder={this.cancelOrder} >
                    <OrderSummary 
                        totalPrice={this.state.totalPrice}
                        cancel={this.cancelOrder}
                        confirm={this.confirmOrder}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger
                    ingredients={this.state.ingredients} 
                    />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.purchaseable()}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;