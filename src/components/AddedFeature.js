import React from 'react';

const AddedFeature = props => {
  // console.log('AddedFeature',props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* <button className="button" onClick={() => props.removeFeature(removeItem)}>X</button> */}
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
