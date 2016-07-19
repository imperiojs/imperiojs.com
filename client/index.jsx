const React = require('react');
const ReactDOM = require('react-dom');
const VisibilityBox = require('./main/visibility.jsx');
const Header = require('./main/header.jsx');
const Fluctus = require('./fluctus/fluctus.jsx');
const Umbra = require('./umbra/umbra.jsx');
const Example3 = require('./example3/example3.jsx');

const App = React.createClass({
  getInitialState() {
    return {
      isVisible: {
        fluctus: false,
        umbra: false,
        example3: false,
      },
    };
  },

  componentWillMount() {

  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */

  visibilityUpdate(update) {
    console.log('visibilityUpdate called', update);
    this.setState({ isVisible: update });
  },

  someEvent() {
    return 1;
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div id="app">
        <VisibilityBox isVisible={this.state.isVisible}/>
        <Header />
        <Fluctus visibilityUpdate={this.visibilityUpdate} />
        <Umbra visibilityUpdate={this.visibilityUpdate} />
        <Example3 visibilityUpdate={this.visibilityUpdate} />
      </div>
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
