import React from 'react'

const SpreadStringArrays = () => {
  let faculty = ['ed', 'frank'];
  let users = ['alice', 'bob', ...faculty];
  let copy = [...users];
  return (
    <div>
      <h2>Spread String Arrays</h2>
      <pre>
        let faculty = ['ed', 'frank'];
      </pre>
      <pre>
      <ul>
        faculty = [{faculty.map(u => `'${u}', `)}]
      </ul>
      </pre>
      <pre>
        let users = ['alice', 'bob', ... faculty];
      </pre>
      <pre>
      <ul>
        users = [{users.map(u => `'${u}', `)}]
      </ul>
      </pre>
      <pre>
          let copy = [... users]
      </pre>
      <pre>
      <ul>
        copy = [{copy.map(u => `'${u}', `)}]
      </ul>
      </pre>
    </div>
  );
};

export default SpreadStringArrays;