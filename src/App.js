import React from 'react';
import {connect} from 'react-redux';

const incrementValue = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrementValue = () => {
  return {
    type: 'DECREMENT',
  };
};

function App({count, increment, decrement}) {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementValue());
    },
    decrement: () => {
      dispatch(decrementValue());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
