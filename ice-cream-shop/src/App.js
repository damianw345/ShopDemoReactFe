import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import './App.css';
// import './Panel';
import Panel from './Panel';
import './Button.css'
import EntryPanel from './EntryPanel'
import ManageOrderPanel from './ManageOrderPanel';
import ChooseIngredientPanel from './ChooseIngredientPanel';

class App extends Component {

  constructor() {
    super()
    this.state = {
      flavours: ['smak1', 'smak2', 'smak3'],
      dressings: ['dodatek1', 'dodatek2', 'dodatek3'],
      sauces: ['polewa1', 'polewa2', 'polewa3'],
      currentState: 'entryState'
      // currentState: 'manageOrderState'
    }
  }

  render() {

    let elementToRender;

    if (this.state.currentState === 'entryState') {
      elementToRender = <EntryPanel app = {this}/>
    } 
    if (this.state.currentState === 'manageOrderState') {
      elementToRender = <ManageOrderPanel app = {this}/>
    } 
    if (this.state.currentState === 'chooseIngredientsState') {
      elementToRender = <ChooseIngredientPanel app = {this}/>
    }

    return (
      <Container>
        <Row style={{ background: 'green' }}>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}>

            <Panel topText={'Dodaj skladniki'}>

              {elementToRender}
            </Panel>

          </Col>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'blue' }}>
            <Panel topText={'Podsumowanie'}>

            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }

  onNewOrder = () => {
    this.setState({currentState: 'manageOrderState'});
  }

}

export default App;