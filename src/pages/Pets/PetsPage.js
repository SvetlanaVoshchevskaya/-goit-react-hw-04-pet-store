import React, { Component } from 'react';
import Pets from '../../components/Pets';
// import * as petsAPI from '../../services/PetsAPI';

class PetsPage extends Component {
  state = { pets: [] };

  //   componentDidMount() {
  //     petsAPI.findIMG().then(console.log());
  //   }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <Pets pets={pets} />
      </div>
    );
  }
}
export default PetsPage;
