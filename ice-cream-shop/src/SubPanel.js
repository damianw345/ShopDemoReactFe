import React from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';
import './Button.css';
import SubPanelRow from './SubPanelRow'


const SubPanel = ({ topText, buttonLabel }) => {

    return (
        <div className='subpanel'>
            <h3 id='sub-panel-title'>{topText}</h3>
            <SubPanelRow labelText='a' />
            <SubPanelRow labelText='a' />
            <SubPanelRow labelText='a' />
            <SubPanelRow labelText='a' />
        </div>
    );
}

export default SubPanel;
