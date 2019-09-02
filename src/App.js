import React from 'react';
import {connect} from 'react-redux';

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
const reset = () => {
  return {
    type: 'RESET',
  };
};
function App({count, increment, decrement, reset}) {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </section>
    </main>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
