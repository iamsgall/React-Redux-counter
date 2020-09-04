import React from 'react';
import {connect} from 'react-redux';

export const Counter = props => {
  const {count, handleClick} = props;
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleClick(1)}>Increment</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  handleClick(num) {
    dispatch({
      type: 'INCREMENT',
      payload: {num},
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
