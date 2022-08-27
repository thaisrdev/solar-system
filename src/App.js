import React from 'react';
import Header from './components/Header';
// import './App.css';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';
// import PlanetCard from './components/PlanetCard';
import Mission from './components/Missions';
import MissionCard from './components/MissionCard';
import Missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        {/* <Title /> */}
        {/* <PlanetCard /> */}
        <Mission />
        <section>
          { Missions.map((element) => (
            <MissionCard
              key={ element.name }
              info={ element }
            />
          ))}
        </section>

      </div>
    );
  }
}

export default App;
