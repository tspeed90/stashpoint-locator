import React, { Component } from 'react';
import { getStashpoints } from '../utils/getStashpoints';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getStashpoints('London');
  }

  render() {
    return <div>Soon to be stashpoints!</div>;
  }
}
