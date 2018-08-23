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

class App extends Component {

  render() {
    return (
      <Container className='clazz'>
        <Row style={{ background: 'green' }}>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}>

          <Panel topText={'Dodaj skladniki'}></Panel>

          </Col>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'blue' }}>
            2
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;