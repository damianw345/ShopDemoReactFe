import React from 'react';
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
        this.state = {
            labelText: props.labelText,
            buttonLabelText: props.buttonLabelText,
            handleClick: props.handleClick,
            ingredientType: props.type,
            removeButtons: props.removeButtons,
        }
    }

    render(){
        let btnClass = classNames('btn', 'btn-primary', 'dodaj-button');

        if(this.state.removeButtons){
            return (
                <Col sm={{ size: 12 }}>
                    <Row className='subpanel-row'>
                        <Col size='12'>
                            <p>{this.state.labelText}</p>
                        </Col>
                    </Row>
                </Col>
            );
        } else{
            return (
                <Col sm={{ size: 12 }}>
                    <Row className='subpanel-row'>
                        <Col size='6'>
                            <p>{this.state.labelText}</p>
                        </Col>
                        <Col size='6'>
                            <button type="button" onClick={this.passRowDataOnClick} className={btnClass}>{this.state.buttonLabelText}</button>
                        </Col>
                    </Row>
                </Col>
            );
        }

    }

    passRowDataOnClick = ( () => {
        this.state.handleClick({
            ingredientName: this.state.labelText,
            ingredientType: this.state.ingredientType
        });
    });
}

export default SubPanelRow;