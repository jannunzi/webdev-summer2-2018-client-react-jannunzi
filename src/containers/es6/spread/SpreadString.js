import React from 'react'

const SpreadString = () => {
  var faculty = "alice";
  var chars = [ ...faculty];
  return (
    <div>
      <h2>Spread Strings</h2>
      <pre>
        var faculty = "alice"
        var chars = [ ...faculty ] // [ "a", "l", "i", "c", "e" ]
      </pre>
      faculty = "{faculty}"<br/>
      chars = [ ...faculty ] = [{chars.map(c => `"${c}", `)}]
    </div>
  )
};

export default SpreadString