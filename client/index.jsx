// require npm modules
const React = require('react');
const ReactDOM = require('react-dom');
// require components
const VisibilityBox = require('./main/visibility.jsx');
const ConnectionInfo = require('./main/connectionInfo.jsx');
const Header = require('./main/header.jsx');
const Fluctus = require('./fluctus/fluctus.jsx');
const Umbra = require('./umbra/umbra.jsx');
const Example3 = require('./example3/example3.jsx');

const App = React.createClass({
  getInitialState() {
    return {
      connections: {},
      isVisible: {
        fluctus: false,
        umbra: false,
        example3: false,
      },
    };
  },

  componentDidMount() {
    imperio.listenerRoomSetup();
    imperio.roomUpdate(this.updateConnectionInfo);
  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */

  /* Invoked when listenerRoomSetup / roomUpdate fires
   * Logs the updated state of the socket room
   */
  updateConnectionInfo(roomData) {
    console.log('Room Updated!', roomData);
    if (roomData) {
      this.setState({ connections: roomData.sockets });
    }
  },

  /* Invoked from any rendered examples upon the example becoming visible
   * Updates state.isVisible to determine which example is visible
   */
  visibilityUpdate(update) {
    for (let example in update) { // eslint-disable-line
      if (update.hasOwnProperty(example)) {
        this.state.isVisible[example] = update[example];
      }
    }
    this.setState({ isVisible: this.state.isVisible });
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div id="app">
        <VisibilityBox isVisible={this.state.isVisible} />
        <ConnectionInfo connections={this.state.connections} />
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
