import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem, removeFeature } from './components/actions/carActions'

const App = (props) => {
console.log(props,'app')

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} /> 
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    initialPrice: state.car.price,
    name: state.car.name,
    image: state.car.image,
    features: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(App);
