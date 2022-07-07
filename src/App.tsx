// import React, { useEffect } from 'react';
import './App.less';

//antd
import 'antd/dist/antd.less'

import TopNav from '@components/topNav';

// route
import MRoute from './route/route';

// css
import "./assets/css/media.less"

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
