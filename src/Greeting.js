import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './action';

function Greeting() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  return (
    <div className="Greet">
      <h1 className='title'>Hello, {name}!</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => dispatch(setName(e.target.value))} 
      />
    </div>
  );
}

export default Greeting;