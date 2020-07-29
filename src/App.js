import React from 'react';

import './App.css';
import AppAtlas from './atlas_comps/appAtlas';
import AppMap from './atlas_comps/appMap';

function App() {
  return (
    <div className="App">
      {/* <AppMap/> */}
     <AppAtlas/>
    </div>
  );
}

export default App;
