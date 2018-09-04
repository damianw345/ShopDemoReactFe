import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './App.css';
import Panel from './Panel';
import OrderPanel from './OrderPanel';
import axios from 'axios';

// let baseUrl = 'http://18.185.138.85:8080/';
let baseUrl = 'http://localhost:8080/';

class App extends Component {

  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col >
            <Panel topText={'W realizacji'}>
              {this.state.orders.map((order) => {
                return (
                  <OrderPanel
                    key= {order.orderId}
                    topText='Zamówienie'
                    iceCreams = {order.iceCreams}
                  />
                );
              })}
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }

  fetchOrders = () => {
    // http://localhost:8080/orders?filter=not_finished
    axios.get(baseUrl + 'orders?filter=not_finished')
      .then(response => {

        let fetchedOrders = response.data;
        this.setState({
          orders: fetchedOrders
        });
      })
      .catch(() => this.setState({ orders: [] }));
  }

  componentDidMount() {
    this.fetchOrders();
    this.timer = setInterval(() => this.fetchOrders(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }
}

export default App;
