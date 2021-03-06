// App state: a plain object with many keys or "slices"
const state = {
  todos: [
    {
      text: 'Eat food',
      completed: true
    },
    {
      text: 'Exercise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
};

// Actions: plain objects with a "type" field
const addTodo = {type: 'ADD_TODO', text: 'Go to swimming pool'};
const toggleTodo = {type: 'TOGGLE_TODO', index: 1};
const setVisibilityTodo = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};

// Action creators: functions that return an action
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}
