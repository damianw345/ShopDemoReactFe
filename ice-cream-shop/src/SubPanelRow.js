import React, {Component} from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';
import './Button.css';
import classNames from 'classnames/bind';

class SubPanelRow extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            labelText: props.labelText,
            buttonLabelText: props.buttonLabelText,
            handleClick: props.handleClick,
        }
    }

    render(){
        let btnClass = classNames('btn', 'btn-primary', 'dodaj-button');
    
        return (
            // <Col sm={{ size: 12 }} className='choose-window'>
            <Col sm={{ size: 12 }}>
                <Row className='subpanel-row'>
                    <Col size='6'>
                        <p>{this.state.labelText}</p>
                    </Col>
                    <Col size='6'>
                        <button type="button" onClick={this.innerHandleClick} className={btnClass}>{this.state.buttonLabelText}</button>
                    </Col>
                </Row>
            </Col>
        );
    }

    innerHandleClick = ( () => {
        // console.log("haha");
        this.state.handleClick(this.state.labelText);
    })
}

export default SubPanelRow;