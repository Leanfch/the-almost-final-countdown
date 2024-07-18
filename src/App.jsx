import Input from './input';
import React from 'react';

export const userData = {
  name: '',
  email: '',
};

export function App() {
    const ref = React.useRef();
    const data = React.useRef();
  function handleSaveData() {
    // userData.name = 'TODO: Set to actual entered value';
    // userData.email = 'TODO: Set to actual entered value';
    userData.name = ref.current.value;
    userData.email = data.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={ref}/>
      <Input type="email" label="Your E-Mail" ref={data}/>
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

