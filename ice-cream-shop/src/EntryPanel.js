import React, { Component } from 'react';
import LargeButton from './LargeButton'

const EntryPanel = ({app}) => {

    return(
        <div>
          <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'} handleClick={app.onNewOrder}></LargeButton>
          <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton>
        </div>
    );
}


export default EntryPanel;