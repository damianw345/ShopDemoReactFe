import React, { Component } from 'react';
import './App.css';
import LargeButton from './LargeButton';


class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: props.topText
            // topText: 'default',
            // buttons: []
        }
    }

    render() {
        const topText = this.state.topText;

        return(
            <div className='panel'>
                <p id={'container-p'}>{topText}</p>
                <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'}></LargeButton>
                <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton>
            </div>
        );
    }
}

export default Panel;