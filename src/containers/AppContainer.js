import App from '../components/App';
import { connect } from 'react-redux';

import { updateStashpoints } from '../actions/actions';

const mapStateToProps = state => {
  return {
    stashpointsData: state.stashpointsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStashpoints: data => dispatch(updateStashpoints(data))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
