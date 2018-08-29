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
                />)
        }

        return (
            <div>
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

    handleIngredientAdd = (data) => {

        console.log('handleIngredientAdd ' + JSON.stringify(data));

        let { ingredientName, ingredientType } = data;

        switch (ingredientType) {
            case 'Smaki':

                this.setState(prevState => ({
                    flavours: [...prevState.flavours, ingredientName]
                }))
                break;

            case 'Dodatki':
                this.setState({ dressings: [ingredientName] });

                break;
            case 'Polewy':
                this.setState({ sauces: [ingredientName] });
                break;
        }
    }

    handleIngredientRemove = (data) => {

        let { ingredientName, ingredientType } = data;

        // console.log("Click received by parent");
        // console.log('ingredientName ' + ingredientName);
        // console.log('ingredientType ' + ingredientType);

        switch (ingredientType) {
            case 'Smaki':
                this.setState({
                    flavours: this.state.flavours.filter((flavour) => flavour !== ingredientName)
                })
                break;

            case 'Dodatki':
                this.setState({
                    dressings: this.state.dressings.filter((dressing) => dressing !== ingredientName)
                });
                break;
            case 'Polewy':
                this.setState({
                    sauces: this.state.sauces.filter((sauce) => sauce !== ingredientName)
                })
                break;
        }
    }

    getOrderedIngredients = () => {
        return {
            // if it will be needed change here dressings and sauces back to arrays
            
            // iceCreamId: this.state.iceCreamId,
            // flavours: this.state.flavours,
            // dressings: this.state.dressings,
            // sauces: this.state.sauces

            iceCreamId: this.state.iceCreamId,
            flavours: this.state.flavours,
            dressing: this.state.dressings[0],
            sauce: this.state.sauces[0]
        }
    }
}

export default SummarySubpanel;