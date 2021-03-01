import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

export function CounterHooks(props) {
  const [count, setCount ] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  //ComponentDidMount
  //ComponentDidUpdate
  //ComponentWillUnmount

  return (
    <React.Fragment>
      <input type="text" onChange={ e => setName(e.target.value) } />
      <div>{name} have clicked {count} counter hooks times! </div>
      <button onClick={() => setCount(count + 1)} >Increase</button>
    </React.Fragment>
  )
}
