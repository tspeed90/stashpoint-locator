import React, { Component } from 'react';
import { getStashpoints } from '../utils/getStashpoints';
import { requestLocation } from '../utils/getLocation';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { updateStashpoints } = this.props;
    requestLocation()
      .then(position =>
        getStashpoints(position.coords.latitude, position.coords.longitude)
      )
      .then(res => updateStashpoints(res))
      .catch(err => alert(`Unable to find your location: ${err}`));
  }

  render() {
    const { stashpointsData } = this.props;
    return (
      <article>
        <h1>Stashpoints in Your Area</h1>
        {stashpointsData.map(location => {
          return (
            <div key={location.id}>
              <img src={location.photo} alt={`${location.name} stashpoint`} />
              <br />
              {location.name}
              <br />
              Address: {location.address}
              <br />
              {location.postalCode}
              <br />
              Open 24 Hours? {location.open24Hours === true ? 'Yes' : 'No'}
            </div>
          );
        })}
      </article>
    );
  }
}
