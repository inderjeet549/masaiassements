import React, { useState } from 'react';
function App() {
  const [title, setTitle] = useState('React Title');
  const [reactUpdateCount, setReactUpdateCount] = useState(0);
  const [vanillaUpdateCount, setVanillaUpdateCount] = useState(0);
  const changeTitleWithReact = () => {
    setTitle('React Title Changed');
    setReactUpdateCount(reactUpdateCount + 1);
  };
  const changeTitleWithVanillaJS = () => {
    document.title = 'Vanilla JS Title Changed';
    setVanillaUpdateCount(vanillaUpdateCount + 1);
  };

  return (
    <div>
      <h1>Virtual DOM vs Traditional DOM</h1>
      <p>Current Title: {title}</p>
      <button onClick={changeTitleWithReact}>Change Title (React)</button>
      <p>React DOM Updates: {reactUpdateCount}</p>
      <button onClick={changeTitleWithVanillaJS}>Change Title (Vanilla JS)</button>
      <p>Vanilla JS DOM Updates: {vanillaUpdateCount}</p>
    </div>
  );
}

export default App;
