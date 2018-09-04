import React from 'react';
import './SubPanel.css';

const SubPanel = ({ topText, buttonLabels, ingredientChosenHandler}) => {

    return (
        <div className='subpanel'>
            <h3 id='sub-panel-title'>{topText}</h3>
            {/* {
                buttonLabels.map((buttonLabel) => {
                   return(<SubPanelRow key = {topText + ' ' + buttonLabel.name} type = {topText} labelText={buttonLabel.name} buttonLabelText={'Dodaj'} handleClick={ingredientChosenHandler}/>); 
                })
            } */}
        </div>
    );
}

export default SubPanel;