import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './App.css';
import Panel from './Panel';
import OrderPanel from './OrderPanel';
import IceCreamsPanel from './IceCreamsPanel';
import axios from 'axios';

// let baseUrl = 'http://18.185.138.85:8080/';
let baseUrl = 'http://localhost:8080/';

class App extends Component {

  constructor() {
    super()
    this.state = {
      orders: [],
      ordersPanels: [],
      iceCreamsPanels: [],
    }
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col >
            <Panel topText={'W realizacji'}>
              <OrderPanel topText={'Zamówienie'}>
                {this.state.iceCreamsPanels.map((orderPanel) => orderPanel)}
              </OrderPanel>
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

        let newIceCreamsPanels = fetchedOrders.map(order => {
          return order.iceCreams.map(iceCream => {
            return(<IceCreamsPanel
              key={Math.random() * 10000}
              // iceCreamId={this.state.iceCreamsInOrder.length + 1}
              flavours={iceCream.flavours}
              dressings={[iceCream.dressing]}
              sauces={[iceCream.sauce]}
            />);
          })
        });

        this.setState({
          orders: fetchedOrders,
          iceCreamsPanels: newIceCreamsPanels
        })
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
