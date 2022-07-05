import React from 'react';
import './App.less';

//antd
import 'antd/dist/antd.less'

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
