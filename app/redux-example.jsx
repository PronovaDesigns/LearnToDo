var redux = require('redux');

console.log('Starting Redux example');

// Reducer requires default state and to return state.
var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'}; // ES5 way of creating default state.

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
