import React from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';
import './Button.css';
import SubPanelRow from './SubPanelRow'


const SubPanel = ({ topText, buttonLabels }) => {

    return (
        <div className='subpanel'>
            <h3 id='sub-panel-title'>{topText}</h3>
            {
                buttonLabels.map((buttonLabel) => {
                   return(<SubPanelRow labelText={buttonLabel.name} buttonLabelText={'Dodaj'} />); 
                })
            }
        </div>
    );
}

export default SubPanel;
