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

        // let flavourRowsToRender;
        // let dressingRowToRender;
        // let sauceRowToRender;

        // if(Array.isArray(this.flavours) && this.flavours.length){
        //     // array exists and is not empty
        // }

        return (
            <div>
                <p className='summarySubpanelIceCreamP'>Lód numer {this.props.iceCreamId}:</p>
                <p className='summarySubpanelIngredientP'>Smaki:</p>


                {typeof this.state.flavours !== 'undefined' && this.state.flavours.map((flavour) => <SubPanelRow labelText={flavour} buttonLabelText={'Usuń'} />)}

                <p className='summarySubpanelIngredientP'>Dekoracje:</p>
                {typeof this.state.dressings !== 'undefined' && this.state.dressings.map((dressing) => <SubPanelRow labelText={dressing} buttonLabelText={'Usuń'} />)}

                <p className='summarySubpanelIngredientP'>Polewy:</p>
                {typeof this.state.sauces !== 'undefined' && this.state.sauces.map((sauce) => <SubPanelRow labelText={sauce} buttonLabelText={'Usuń'} />)}

            </div>
        );
    }
}

export default SummarySubpanel;