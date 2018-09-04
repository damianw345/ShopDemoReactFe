import React from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';

const SubPanelRow = ({labelText}) => {

    return (
        <Col sm={{ size: 12 }}>
            <Row className='subpanel-row'>
                <Col size='12'>
                    <p>{labelText}</p>
                </Col>
            </Row>
        </Col>
    );
}

export default SubPanelRow;