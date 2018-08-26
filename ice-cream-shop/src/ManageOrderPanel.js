import React, { Component } from 'react';
import LargeButton from './LargeButton'

const ManageOrderPanel = ({ app }) => {

    return (
        <div>
            <LargeButton id={'dodajLodaButton'} text={'Dostepne skladniki'}></LargeButton>
            <LargeButton id={'anulujZamowienieButton'} text={'Anuluj zamówienie'}></LargeButton>
            <LargeButton id={'zlozZamowienieButton'} text={'Złóż zamówienie'}></LargeButton>
        </div>
    );
}


export default ManageOrderPanel;