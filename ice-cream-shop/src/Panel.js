import React, { Component } from 'react';
import './App.css';

class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: props.topText
            
        }
    }

    componentDidMount() {
        this.scrollToBottom();
      }
    
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
      scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
      }
    

    render(props) {
        const topText = this.state.topText;

        return (
            <div className='panel' ref={el => { this.el = el; }} >
                <p id={'container-p'}>{topText}</p>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;