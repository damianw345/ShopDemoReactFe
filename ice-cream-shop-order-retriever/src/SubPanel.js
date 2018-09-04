import React from 'react';
import './SubPanel.css';

// const SubPanel = ({topText}) => {
const SubPanel = (props) => {
    return (
        <div className='subpanel'>
            <h3 id='sub-panel-title'>{props.topText}</h3>
            {props.children}
        </div>
    );
}

export default SubPanel;