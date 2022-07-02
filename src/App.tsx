import React from 'react';
import logo from './logo.svg';
import './App.scss';

import TopNav from '@components/topNav';

// route
import MRoute from './route/route';

function App() {
  
  return (
    <div>
      <TopNav />
      <div className="App">
        <MRoute></MRoute>
      </div>
    </div>
  );
}

export default App;
