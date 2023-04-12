import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName: name, planetImage: image } = this.props;
    // const { name } = planetName;
    // const { image } = planetImage;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ name }</p>
        <img src={ image } alt={ `Planeta ${name}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;
