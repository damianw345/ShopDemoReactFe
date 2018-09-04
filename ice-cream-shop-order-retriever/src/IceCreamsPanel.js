import React, { Component } from 'react';
import SubPanelRow from './SubPanelRow'
import './OrderPanel.css'
import {
    Button
} from 'reactstrap';
class IceCreamsPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iceCreamId: props.iceCreamId,
            flavours: props.flavours,
            dressings: props.dressings,
            sauces: props.sauces,
        }
    }

    render() {

        let flavoursToRender;
        if (typeof this.state.flavours !== 'undefined' && this.state.flavours.length > 0) {
            flavoursToRender = this.state.flavours.map((flavour) =>
                <SubPanelRow
                    labelText={flavour}
                    key={'Smaki ' + flavour}
                />)
        }

        let dressingsToRender;
        if (typeof this.state.dressings !== 'undefined' && this.state.dressings.length > 0) {
            dressingsToRender = this.state.dressings.map((dressing) =>
                <SubPanelRow
                    labelText={dressing}
                    key={'Dodatki ' + dressing}
                />)
        }

        let saucesToRender;
        if (typeof this.state.sauces !== 'undefined' && this.state.sauces.length > 0) {
            saucesToRender = this.state.sauces.map((sauce) =>
                <SubPanelRow
                    labelText={sauce}
                    key={'Polewy ' + sauce}
                />)
        }

        return (
            <div ref={el => { this.el = el; }}>
                <p className='summarySubpanelIceCreamP'>Lód numer {this.props.iceCreamId}:</p>

                <p className='summarySubpanelIngredientP'>Smaki:</p>
                {flavoursToRender}

                <p className='summarySubpanelIngredientP'>Dodatki:</p>
                {dressingsToRender}

                <p className='summarySubpanelIngredientP'>Polewy:</p>
                {saucesToRender}

                <Button onClick={this.orderDoneHandler} color="success" size="lg" block>Zakończ</Button>
            </div>
        );
    }

    orderDoneHandler = () => {
        console.log('click!');
    }

    // componentDidMount() {
    //     this.scrollToBottom();
    // }

    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }

    // scrollToBottom() {
    //     this.el.scrollIntoView({ behavior: 'smooth' });
    // }
}

export default IceCreamsPanel;