const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState() {
    return {};
  },

  componentWillMount() {

  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */

  someEvent() {
    return 1;
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div>Imperio!</div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);


// page to add friend
// page to display friends
// click on friend to set timer
