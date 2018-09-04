import React, { Component } from 'react';
import './OrderPanel.css';
import IceCreamsPanel from './IceCreamsPanel';

class OrderPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: props.topText,
            iceCreams: props.iceCreams
        }
    }

    render() {
        return (
            <div className='subpanel'>
                <h3 id='sub-panel-title'>{this.state.topText}</h3>
                <div>
                    {this.state.iceCreams.map((iceCream) => {
                        return (
                            <IceCreamsPanel
                                // iceCreamId = {iceCream.}
                                flavours={iceCream.flavours}
                                sauces={[iceCream.sauce]}
                                dressings={[iceCream.dressing]}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default OrderPanel;