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
import './Panel';
import Panel from './Panel';
import LargeButton from './LargeButton'
import './Button.css'
import SubPanel from './SubPanel'

class App extends Component {

  render() {
    return (
      <Container>
        <Row style={{ background: 'green' }}>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}>

            <Panel topText={'Dodaj skladniki'}>

              {/* <LargeButton id={'noweZamowienieButton'} text={'Nowe zamówienie'} handleClick={this.newOrder}></LargeButton>

              <LargeButton id={'dostepneSkladnikiButton'} text={'Dostepne skladniki'}></LargeButton> */}

                <SubPanel>

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