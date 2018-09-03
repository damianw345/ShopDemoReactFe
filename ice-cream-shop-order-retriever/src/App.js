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


class App extends Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col >
            <Panel topText={'W realizacji'}>
              {/* {elementToRender} */}
              <SubPanel topText={'Zamówienie 1'}>
                {/* <div>

                </div> */}

              </SubPanel>

              {/* <SummarySubpanel iceCreamId = {1} flavours={['smak1', 'smak2']} sauces = {['sos1']} dressings = {['dodatek1']}/> */}

            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
