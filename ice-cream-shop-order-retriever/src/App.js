import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './App.css';
import Panel from './Panel';
import SubPanel from './SubPanel';
import SummarySubpanel from './SummarySubpanel';
import axios from 'axios';

// let baseUrl = 'http://18.185.138.85:8080/';
let baseUrl = 'http://localhost:8080/';

class App extends Component {

  constructor() {
    super()
    this.state = {
      orders: [],
    }
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col >
            <Panel topText={'W realizacji'}>
              <SubPanel topText={'Zamówienie'}>
                <SummarySubpanel iceCreamId={1} flavours={['smak1', 'smak2']} sauces={['sos1']} dressings={['dodatek1']} />
              </SubPanel>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }

  componentDidMount() {

    // http://localhost:8080/orders?filter=not_finished

    axios.get(baseUrl + 'orders?filter=not_finished')
      .then(fetchedOrders => { console.log(fetchedOrders.data); this.setState({ orders: fetchedOrders.data })})
      .catch(() => this.setState({ orders: [] }));
  }
}

export default App;
