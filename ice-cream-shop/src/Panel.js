import React, { Component } from 'react';
import './App.css';
import LargeButton from './LargeButton';


class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: props.topText
        }
    }

    render(props) {
        const topText = this.state.topText;

        return (
            <div className='panel'>
                <p id={'container-p'}>{topText}</p>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;