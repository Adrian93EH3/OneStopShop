import React, { Component } from 'react';
import Backpack from '../../components/Inventory/backpack'
import '../../components/App/App.css';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Backpack />
          </div>
        </div>
      </div>

      
    );
  }
}

export default HomePage;
