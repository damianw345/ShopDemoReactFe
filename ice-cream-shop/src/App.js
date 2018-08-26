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
      flavours: ['smak1', 'smak2','smak3'],
      dressings: ['dodatek1', 'dodatek2', 'dodatek3'],
      sauces: ['polewa1', 'polewa2', 'polewa3']
    }
  }

  render() {
    return (
      <Container>
        <Row style={{ background: 'green' }}>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}>

            <Panel topText={'Dodaj skladniki'}>

              {/* <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'} handleClick={this.newOrder}></LargeButton>

              <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton> */}

              {console.log(this.state.flavours)}

              <SubPanel topText={'Smaki'} buttonLabels = {this.state.flavours}>

              </SubPanel>

              <SubPanel topText={'Dodatki'} buttonLabels = {this.state.dressings}>

              </SubPanel>

              <SubPanel topText={'Polewy'} buttonLabels = {this.state.sauces}>

              </SubPanel>
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

  newOrder() {
    console.log('elo')
  }

}

export default App;