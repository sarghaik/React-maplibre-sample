import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map/Map';
import Tab from './components/tab/Tab';
import stopData from './stops_list.json';
import List from './components/list/List';

const tabTitles = ['Route', 'Map'];

function App() {
  const [deliveredSeq, setDeliveredSeq] = useState(0);

  return (
    <div className="App">
      <Tab titles={tabTitles} content={[
        <List data={stopData} deliveredSeq={deliveredSeq} setDeliveredSeq={setDeliveredSeq}/>, 
        <Map data={stopData} deliveredSeq={deliveredSeq} />
        ]}/>
    </div>
  );
}

export default App;
