import React, { Component } from 'react';
import LargeButton from './LargeButton'

const EntryPanel = ({app}) => {

    return(
        <div>
          <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'} onClick={app.handleNewOrder}></LargeButton>
          <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton>
        </div>
    );
}

export default EntryPanel;