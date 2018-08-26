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
      iceCreamsInCurrentOrder: 0,
    }
  }

  componentDidMount() {

    fetch('http://localhost:8080/flavours')
    .then(response => response.json())
    .then(fetchedFlavours => {this.setState({ flavours: fetchedFlavours})});


    fetch('http://localhost:8080/dressings')
      .then(response => response.json())
      .then(fetchedDressings => {this.setState({ dressings: fetchedDressings})});

      fetch('http://localhost:8080/sauces')
      .then(response => response.json())
      .then(fetchedSauces => {this.setState({ sauces: fetchedSauces});}
    );
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
      elementToRender = <ChooseIngredientPanel app = {this} flavours = {this.flavours} dressings = {this.dressings} sauces = {this.sauces}/>
    }

    return (
      <Container>
        <Row style={{ background: 'green' }}>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'red' }}>

            <Panel topText={'Dodaj składniki'}>

              {elementToRender}
            </Panel>

          </Col>
          <Col sm={{ size: 5, offset: 1 }} style={{ background: 'blue' }}>
            <Panel topText={'Podsumowanie'}>

              {/* <SummarySubpanel/> */}

              {this.state.summarySubpanels.map((subpanel) => subpanel)}
                
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }

  onNewOrder = () => {
    this.setState({currentState: 'manageOrderState'});
    this.createSummarySubpanel();

  }

  onAvailableIngredients = () => {
    this.setState({currentState: 'chooseIngredientsState'});
  }

  createSummarySubpanel(){
    this.state.summarySubpanels.push(<SummarySubpanel iceCreamId = {++this.state.iceCreamsInCurrentOrder} flavours = {['banan', 'jablko']}/>);

  }
}

export default App;