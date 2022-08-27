import React from 'react';
import Header from './components/Header';
// import './App.css';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';
// import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        {/* <Title /> */}
        {/* <PlanetCard /> */}
        <Missions />
        <MissionCard />

      </div>
    );
  }
}

export default App;
