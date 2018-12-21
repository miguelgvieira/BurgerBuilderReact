import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {type: 'Salad', key: 'salad'},
    {type: 'Cheese', key: 'cheese'},
    {type: 'Bacon', key: 'bacon'},
    {type: 'Meat', key: 'meat'},
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Preço do Hamburgão: <strong>R${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.key}
                label={ctrl.type}
                addIngredient={() => props.addIngredient(ctrl.key)}
                removeIngredient={() => props.removeIngredient(ctrl.key)}
                disabled={props.disabled[ctrl.key]}
            />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={props.purchaseable}
            onClick={props.ordered}
        >PEDIR AGORA</button>
    </div>
)

export default buildControls;