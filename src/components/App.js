import React, { Component } from 'react';
import { getStashpoints } from '../utils/getStashpoints';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { updateStashpoints } = this.props;
    getStashpoints('London')
      .then(res => updateStashpoints(res))
      //TODO: remove this console log after data is being rendered to the screen
      .then(() => console.log('data:', this.props.stashpointsData));
  }

  render() {
    return <div>Soon to be stashpoints!</div>;
  }
}
