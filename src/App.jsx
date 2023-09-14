import React from 'react';
import ArraySum from './ArraySum';
import '../style.css'

function App() {
  const numbers = [10, 20, 30, 40, 50];

  return (
    <div>
      <ArraySum numbers={numbers} />
    </div>
  );
}

export default App;

