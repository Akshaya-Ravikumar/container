import React from 'react';
import './App.css';

const ReactMFE2 = (
  () => import ('mfe2/Mfe2Index')
)

function App() {
  return (
    <div className="App">
          <ReactMFE2 />
    </div>
  );
}

export default App;
