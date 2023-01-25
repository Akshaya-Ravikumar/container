import React, { Suspense } from 'react';
import './App.css';

const ReactMFE2 = React.lazy(
  () => import ('mfe2/Mfe2Index')
)

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
          <ReactMFE2 />
      </Suspense>
      

    </div>
  );
}

export default App;
