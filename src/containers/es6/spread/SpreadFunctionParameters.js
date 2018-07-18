import React from 'react'

const SpreadFunctionParameters = () => {
  function sum(x, y, ...z) {
    let total = 0;
    // z in an array of rest
    for (var i=0; i<z.length; i++) {
      total += z[i];
    }
    total += x;
    total += y;
    return total;
  }
  let total = sum(1, 2, 3, 4, 5);
  return(
    <div>
      <h3>Spread Function Parameters</h3>
      {total}
    </div>
  );
};

export default SpreadFunctionParameters;