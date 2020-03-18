import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.initialPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  let count = 0;
  state.car.features.forEach(item => {
    count += item.price
  })
  return {
    initialPrice: state.car.price,
    additionalPrice: count
  }
}

export default connect(mapStateToProps, {})(Total);
