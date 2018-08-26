import React from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';
import './Button.css';
import classNames from 'classnames/bind';


const SubPanelRow = ({ labelText, handleClick }) => {

    let btnClass = classNames('btn', 'btn-primary', 'dodaj-button');

    return (
        // <Col sm={{ size: 12 }} className='choose-window'>
        <Col sm={{ size: 12 }}>
            <Row className='subpanel-row'>
                <Col size='6'>
                    <p>{labelText}</p>
                </Col>
                <Col size='6'>
                    <button type="button" onclick={handleClick} className={btnClass}>Dodaj</button>
                </Col>
            </Row>
        </Col>
    );
}

export default SubPanelRow;