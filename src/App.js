import React from 'react';
import {connect} from 'react-redux';

function App() {
  return (
    <main class="Counter">
      <p class="count">0</p>
      <section class="controls">
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
