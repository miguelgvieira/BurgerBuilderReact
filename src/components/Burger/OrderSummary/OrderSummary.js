import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render (){
        const ingredientes = Object.keys(this.props.ingredients).map(igKey => {
        return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        });
        return (
            <Aux>
                <h3>Pedido do senhor</h3>
                <p>Seu hamburger feito com os ingredientes</p>
                <ul>
                    {ingredientes}
                </ul>
                <p><strong>Total de R${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continuar com a compra?</p>
                <Button
                    clicked={this.props.cancel}
                    btnType="Danger"
                    >CANCELAR</Button>
                <Button
                    clicked={this.props.confirm}
                    btnType="Success"
                    >CONTINUAR</Button>
            </Aux>
        );
    }
};

export default OrderSummary;