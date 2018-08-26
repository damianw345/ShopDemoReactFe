import React, { Component } from 'react';
import SubPanel from './SubPanel'
import './SubPanel.css'

const ChooseIngredientPanel = ({ app }) => {

    return (
        <div>
          <SubPanel topText={'Smaki'} buttonLabels={app.state.flavours} />

          <SubPanel topText={'Dodatki'} buttonLabels={app.state.dressings} />

          <SubPanel topText={'Polewy'} buttonLabels={app.state.sauces} />
        </div>
    );
}

export default ChooseIngredientPanel;