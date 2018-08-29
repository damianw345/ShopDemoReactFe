import React from 'react';
import SubPanel from './SubPanel'
import './SubPanel.css'
import {Button} from 'reactstrap';

const ChooseIngredientPanel = ({app, ingredientChosenHandler, iceCreamAcceptedHandler, goBackHandler}) => {

    return (
        <div>
          <SubPanel topText={'Smaki'} buttonLabels={app.state.flavours} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Dodatki'} buttonLabels={app.state.dressings} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Polewy'} buttonLabels={app.state.sauces} ingredientChosenHandler={ingredientChosenHandler}/>

          <Button onClick = {goBackHandler} color="danger" size="lg" block>Wstecz</Button>
          <Button onClick = {iceCreamAcceptedHandler} color="success" size="lg" block>Zatwierdź</Button>
        </div>
    );
}

export default ChooseIngredientPanel;