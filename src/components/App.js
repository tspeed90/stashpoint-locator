import React, { Component } from 'react';
import { getStashpoints } from '../utils/getStashpoints';
import { requestLocation } from '../utils/getLocation';

import styles from './App.css';
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
      <main>
        <h1 className={styles.heading}>Luggage Storage Near You</h1>
        {stashpointsData.map(location => {
          return (
            <article key={location.id} className={styles.stashpoint}>
              <img src={location.photo} alt={`${location.name} stashpoint`} />
              <br />
              <div className={styles.details}>
                <h2>{location.name}</h2>
                <br />
                Address: {location.address} {location.postalCode}
                <br />
                Open 24 Hours? {location.open24Hours === true ? 'Yes' : 'No'}
              </div>
            </article>
          );
        })}
      </main>
    );
  }
}
