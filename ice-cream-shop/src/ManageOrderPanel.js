import React from 'react';
import LargeButton from './LargeButton'

const ManageOrderPanel = ({ app }) => {

    return (
        <div>
            <LargeButton id={'dodajLodaButton'} text={'Dostepne skladniki'} onClick={app.handleAvailableIngredients}></LargeButton>
            <LargeButton id={'anulujZamowienieButton'} text={'Anuluj zamówienie'}></LargeButton>
            <LargeButton id={'zlozZamowienieButton'} text={'Złóż zamówienie'} onClick={app.handleSubmitOrder}></LargeButton>
        </div>
    );
}

export default ManageOrderPanel;