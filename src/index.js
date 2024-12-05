import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle( props ){

  const [ toggle, setToggle ] = useState( false ) 

  return <button onClick={() => setToggle(!toggle)}>{ toggle ? 'ON':'OFF' }</button>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Toggle/> 
);





