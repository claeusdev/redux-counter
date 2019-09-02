import React from 'react';
import {connect} from 'react-redux';

const incrementValue = () => {
  return {
    type: 'INCREMENT',
  };
};
function App({count, increment}) {
  console.log(count, increment);
  return (
    <main class="Counter">
      <p class="count">{count}</p>
      <section class="controls">
        <button onClick={() => increment()}>Increment</button>
        <button>Decrement</button>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
