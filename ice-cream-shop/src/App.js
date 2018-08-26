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
import LargeButton from './LargeButton'
import './Button.css'
import SubPanel from './SubPanel'
import './SubPanel.css'

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
      elementToRender =
        <div>
          <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'} handleClick={this.onNewOrder}></LargeButton>
          <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton>
        </div>;
    } if (this.state.currentState === 'chooseIngredientsState') {
      elementToRender =
        <div>
          <SubPanel topText={'Smaki'} buttonLabels={this.state.flavours} />

          <SubPanel topText={'Dodatki'} buttonLabels={this.state.dressings} />

          <SubPanel topText={'Polewy'} buttonLabels={this.state.sauces} />
        </div>

    } if (this.state.currentState === 'manageOrderState') {
      elementToRender =
      <div>
        <LargeButton id={'dodajLodaButton'} text={'Dostepne skladniki'}></LargeButton>
        <LargeButton id={'anulujZamowienieButton'} text={'Anuluj zamówienie'}></LargeButton>
        <LargeButton id={'zlozZamowienieButton'} text={'Złóż zamówienie'}></LargeButton>
      </div>
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