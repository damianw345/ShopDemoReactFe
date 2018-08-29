import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import './App.css';
import Panel from './Panel';
import EntryPanel from './EntryPanel'
import ManageOrderPanel from './ManageOrderPanel';
import ChooseIngredientPanel from './ChooseIngredientPanel';
import SummarySubpanel from './SummarySubpanel';

class App extends Component {

  constructor() {
    super()
    this.state = {
      flavours: [],
      dressings: [],
      sauces: [],
      currentState: 'entryState',
      summarySubpanels: [],
      numberOfIceCreamsInOrder: 0,
      order: {},
      iceCreamsInOrder: [],
    }
  }

  componentDidMount() {

    fetch('http://localhost:8080/flavours')
      .then(response => response.json())
      .then(fetchedFlavours => { this.setState({ flavours: fetchedFlavours }) });


    fetch('http://localhost:8080/dressings')
      .then(response => response.json())
      .then(fetchedDressings => { this.setState({ dressings: fetchedDressings }) });

    fetch('http://localhost:8080/sauces')
      .then(response => response.json())
      .then(fetchedSauces => { this.setState({ sauces: fetchedSauces }); }
      );
  }

  render() {

    // this.order = {
    //   iceCreams: [
    //     {
    //       dressing: "posypka",
    //       flavours: [
    //         "jablko"
    //       ],
    //       sauce: "monte"
    //     }
    //   ],
    //   isFinished: false,
    // }

    // console.log(this.order);

    let elementToRender;

    if (this.state.currentState === 'entryState') {
      elementToRender = <EntryPanel app={this} />
    }
    if (this.state.currentState === 'manageOrderState') {
      elementToRender = <ManageOrderPanel app={this} />
    }
    if (this.state.currentState === 'chooseIngredientsState') {
      elementToRender = <ChooseIngredientPanel
        app={this}
        flavours={this.flavours}
        dressings={this.dressings}
        sauces={this.sauces}
        ingredientChosenHandler={this.handleChooseIngredient}
        iceCreamAcceptedHandler={this.handleIceCreamAccepted}
        onCancelIceCream={this.handleCancelIceCream}
      />
    }

    return (
      <Container>
        {/* <Row style={{ background: 'green' }}> */}
        <Row>
          {/* <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}> */}
          <Col sm={{ size: 5, offset: 1 }}>
            <Panel topText={'Dodaj składniki'}>
              {elementToRender}
            </Panel>
          </Col>
          {/* <Col sm={{ size: 5, offset: 1 }} style={{ background: 'blue' }}> */}
          <Col sm={{ size: 5, offset: 1 }}>
            <Panel topText={'Podsumowanie'}>
              {this.state.summarySubpanels.map((subpanel) => subpanel)}
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }

  handleAvailableIngredients = () => {

    this.setState(prevState => ({
      summarySubpanels: [...prevState.summarySubpanels,
        <SummarySubpanel
          ref={(child) => { this._child = child; }}
          key={this.state.numberOfIceCreamsInOrder}
          iceCreamId={this.state.iceCreamsInOrder.length + 1}
          flavours={[]}
        />],
      currentState: 'chooseIngredientsState'
    }));
  }

  handleNewOrder = () => {
    this.setState({ currentState: 'manageOrderState' });
    // this.createSummarySubpanel();
  }

  createSummarySubpanel = () => {

    this.setState(prevState => ({
      summarySubpanels: [...prevState.summarySubpanels,
      <SummarySubpanel
        ref={(child) => { this._child = child; }}
        key={this.state.numberOfIceCreamsInOrder}
        iceCreamId={this.state.iceCreamsInOrder.length}
        flavours={[]}
      />]
    }));
  }

  handleChooseIngredient = (data) => {
    this._child.handleIngredientAdd(data);
  }

  handleIceCreamAccepted = () => {

    let iceCream = this._child.getOrderedIngredients();

    this.setState(prevState => ({
      iceCreamsInOrder: [...prevState.iceCreamsInOrder, iceCream],
      currentState: 'manageOrderState'
    }));
  }

  handleCancelIceCream = () => {
      this.setState((prevState) => ({
        currentState: 'manageOrderState',
        summarySubpanels: [...prevState.summarySubpanels.slice(0, prevState.summarySubpanels.length - 1)]
      }))
  }

  handleSubmitOrder = () => {
    console.log(this.state.iceCreamsInOrder);
  }

}

export default App;