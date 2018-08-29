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
                />)
        }

        let dressingsToRender; 
        if(typeof this.state.dressings !== 'undefined' && this.state.dressings.length > 0){
            dressingsToRender = this.state.dressings.map((dressing) =>
            <SubPanelRow
                labelText={dressing}
                buttonLabelText={'Usuń'}
                handleClick={this.handleIngredientRemove}
            />)
        }

        let saucesToRender; 
        if(typeof this.state.sauces !== 'undefined' && this.state.sauces.length > 0){
            saucesToRender = this.state.sauces.map((sauce) =>
            <SubPanelRow
                labelText={sauce}
                buttonLabelText={'Usuń'}
                handleClick={this.handleIngredientRemove}
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

    handleIngredientRemove = () => {

        console.log("Click received by parent");
        this.setState({sauces: []});
    }
}

export default SummarySubpanel;