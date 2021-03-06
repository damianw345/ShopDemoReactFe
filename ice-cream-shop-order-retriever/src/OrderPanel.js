import React, { Component } from 'react';
import './OrderPanel.css';
import IceCreamsPanel from './IceCreamsPanel';
import {
    Button
} from 'reactstrap';
import axios from 'axios';

class OrderPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: props.topText,
            orderId: props.orderId,
            iceCreams: props.iceCreams,
            baseUrl: props.baseUrl,
            renderButton: true,
        }
    }

    render() {

        let buttonContainer;
        buttonContainer = this.state.renderButton ?
             <Button onClick={this.orderDoneHandler} color="success" size="lg" block>Zakończ</Button>:
             <div></div>

        return (
            <div className='subpanel'>
                <h3 id='sub-panel-title'>{this.state.topText}</h3>
                <div>
                    {this.state.iceCreams.map((iceCream, index) => {
                        return (
                            <IceCreamsPanel
                                iceCreamId = {index + 1}
                                flavours={iceCream.flavours}
                                sauces={[iceCream.sauce]}
                                dressings={[iceCream.dressing]}
                                key={index}
                            />
                        );
                    })}
                    {/* will hide button after finishing order */}
                {buttonContainer}
                </div>
            </div>
        );
    }

    orderDoneHandler = () => {

        this.setState({renderButton: false})

        let config = { headers: {'Content-Type': 'application/json'} };
        let content = {isFinished: true};
        axios.put(this.state.baseUrl + 'orders/' + this.state.orderId, content, config);
    }
}

export default OrderPanel;