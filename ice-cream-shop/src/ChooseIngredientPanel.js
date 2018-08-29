import React from 'react';
import SubPanel from './SubPanel'
import './SubPanel.css'
import {Button} from 'reactstrap';

const ChooseIngredientPanel = ({app, ingredientChosenHandler}) => {

    return (
        <div>
          <SubPanel topText={'Smaki'} buttonLabels={app.state.flavours} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Dodatki'} buttonLabels={app.state.dressings} ingredientChosenHandler={ingredientChosenHandler}/>

          <SubPanel topText={'Polewy'} buttonLabels={app.state.sauces} ingredientChosenHandler={ingredientChosenHandler}/>

          <Button  color="danger" size="lg" block>Anuluj</Button>
          <Button  color="success" size="lg" block>Zatwierdź</Button>
        </div>
    );
}

export default ChooseIngredientPanel;