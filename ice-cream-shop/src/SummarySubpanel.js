import React from 'react';
import SubPanelRow from './SubPanelRow'
import './SubPanel.css'

const SummarySubpanel = ({ topText, buttonLabels }) => {

    return (
        <div>
            <p className='summarySubpanelIceCreamP'>Lód numer 1:</p>
            <p className='summarySubpanelIngredientP'>Smaki:</p>
            {/* {<SubPanelRow labelText={buttonLabel.name} />} */}
            {<SubPanelRow labelText='aa' buttonLabelText={'Usuń'} />}

            <p className='summarySubpanelIngredientP'>Dekoracje:</p>
            {<SubPanelRow labelText='aa' buttonLabelText={'Usuń'} />}

            <p className='summarySubpanelIngredientP'>Polewy:</p>
            {<SubPanelRow labelText='aa' buttonLabelText={'Usuń'} />}

        </div>
    );

}

export default SummarySubpanel;