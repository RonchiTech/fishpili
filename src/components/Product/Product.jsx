import React from 'react';

const product = (props) => {
    const {match} = props
  return (
    <h1>
      This is {match.params.id}
      {console.log(props)}
    </h1>
  );
};
export default product;
