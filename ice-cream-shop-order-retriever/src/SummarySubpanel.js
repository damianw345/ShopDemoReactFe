import React, { Component } from 'react';
import SubPanelRow from './SubPanelRow'
import './SubPanel.css'

class SummarySubpanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iceCreamId: props.iceCreamId,
            flavours: props.flavours,
            dressings: props.dressings,
            sauces: props.sauces,
            removeButtons: props.removeButtons
        }
    }

    render() {

        let flavoursToRender;
        if (typeof this.state.flavours !== 'undefined' && this.state.flavours.length > 0) {
            flavoursToRender = this.state.flavours.map((flavour) =>
                <SubPanelRow
                    labelText={flavour}
                    buttonLabelText={'Usuń'}
                    handleClick={this.handleIngredientRemove}
                    type={'Smaki'}
                    key={'Smaki ' + flavour}
                    removeButtons = {this.state.removeButtons}
                />)
        }

        let dressingsToRender;
        if (typeof this.state.dressings !== 'undefined' && this.state.dressings.length > 0) {
            dressingsToRender = this.state.dressings.map((dressing) =>
                <SubPanelRow
                    labelText={dressing}
                    buttonLabelText={'Usuń'}
                    handleClick={this.handleIngredientRemove}
                    type={'Dodatki'}
                    key={'Dodatki ' + dressing}
                    removeButtons = {this.state.removeButtons}
                />)
        }

        let saucesToRender;
        if (typeof this.state.sauces !== 'undefined' && this.state.sauces.length > 0) {
            saucesToRender = this.state.sauces.map((sauce) =>
                <SubPanelRow
                    labelText={sauce}
                    buttonLabelText={'Usuń'}
                    handleClick={this.handleIngredientRemove}
                    type={'Polewy'}
                    key={'Polewy ' + sauce}
                    removeButtons = {this.state.removeButtons}
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

            </div>
        );
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }
}

export default SummarySubpanel;