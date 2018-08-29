import React from 'react';
import './SubPanel.css';
import {
    Row,
    Col
} from 'reactstrap';
import './Button.css';
import classNames from 'classnames/bind';
import ReactDOM from 'react-dom';


class SubPanelRow extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            labelText: props.labelText,
            buttonLabelText: props.buttonLabelText,
            handleClick: props.handleClick,
            ingredientType: props.type
        }
    }

    render(){
        let btnClass = classNames('btn', 'btn-primary', 'dodaj-button');

        // let clickHandler; 
        // if(this.state.buttonLabelText.toUpperCase() === 'DODAJ'){
        //     clickHandler = this.passRowDataOnClick; 
        // } else{
        //     // clickHandler = this.handleRemoveRow; 
        //     clickHandler = this.state.handleClick; 
        // }
    
        return (
            <Col sm={{ size: 12 }}>
                <Row className='subpanel-row'>
                    <Col size='6'>
                        <p>{this.state.labelText}</p>
                    </Col>
                    <Col size='6'>
                        {/* <button type="button" onClick={clickHandler} className={btnClass}>{this.state.buttonLabelText}</button> */}
                        <button type="button" onClick={this.passRowDataOnClick} className={btnClass}>{this.state.buttonLabelText}</button>
                    </Col>
                </Row>
            </Col>
        );
    }

    // handleRemoveRow = ( () => {
    //     console.log('remove row');
    //     // ReactDOM.unmountComponentAtNode(this);

    // });

    passRowDataOnClick = ( () => {
        console.log(this.state.ingredientType);
        // this.state.handleClick(this.state.labelText);
        this.state.handleClick({
            ingredientName: this.state.labelText,
            ingredientType: this.state.ingredientType
        });
    });
}

export default SubPanelRow;