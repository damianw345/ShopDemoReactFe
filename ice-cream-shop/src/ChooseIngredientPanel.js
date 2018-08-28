import React from 'react';
import SubPanel from './SubPanel'
import './SubPanel.css'

const ChooseIngredientPanel = ({app, ingredientChosenHandler}) => {

    return (
        <div>
          <SubPanel topText={'Smaki'} buttonLabels={app.state.flavours} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Dodatki'} buttonLabels={app.state.dressings} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Polewy'} buttonLabels={app.state.sauces} ingredientChosenHandler={ingredientChosenHandler}/>
        </div>
    );
}

export default ChooseIngredientPanel;