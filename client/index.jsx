// require npm modules
const React = require('react');
const ReactDOM = require('react-dom');
// require components
const VisibilityBox = require('./main/visibility.jsx');
const ConnectionInfo = require('./main/connectionInfo.jsx');
const Header = require('./main/header.jsx');
const Fluctus = require('./fluctus/fluctus.jsx');
const Umbra = require('./umbra/umbra.jsx');
const Iacto = require('./iacto/iacto.jsx');

const App = React.createClass({
  getInitialState() {
    return {
      connections: {},
      isVisible: {
        iacto: false,
        umbra: false,
        fluctus: false,
      },
    };
  },

  componentDidMount() {
    console.log('in componentDidMount!');
    // THIS NEEDS TO BE CALLED RIGHT AFTER IMPERIO IS IMPORTED!
    // imperio.listenerRoomSetup();
    // imperio.roomUpdate(this.updateConnectionInfo);
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

  /**
   * Invoked from any rendered examples upon the example becoming visible
   * Updates state.isVisible to determine which example is visible
   * @param {object} update object
   */
  visibilityUpdate(update) {
    // list the identifiers we're using for our examples
    const examples = ['iacto', 'umbra', 'fluctus'];
    // toggle mobile event emitters on / off depending on the visibility change
    this.emitToggleEventListeners(update, examples);
    // update the isVisible state object
    for (let example in update) { // eslint-disable-line
      if (update.hasOwnProperty(example)) {
        this.state.isVisible[example] = update[example];
      }
    }
    this.setState({ isVisible: this.state.isVisible });
  },

  emitToggleEventListeners(update, examples) {
    for (const example of examples) {
      if (update.hasOwnProperty(example)) {
        if (update[example] === true) {
          console.log(`emitting start_${example}`);
          imperio.emitData(null, { action: `start_${example}` });
        } else {
          console.log(`emitting stop_${example}`);
          imperio.emitData(null, { action: `stop_${example}` });
        }
      }
    }
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    const clickedState = `ClickedState: ${this.state.clicked}`;
    return (
      <div id="app">
        <VisibilityBox isVisible={this.state.isVisible} />
        <ConnectionInfo connections={this.state.connections} />
        <Iacto
          connections={this.state.connections}
          visibilityUpdate={this.visibilityUpdate}
          visibilityId={'iacto'}
        />
        <Umbra
          visibilityUpdate={this.visibilityUpdate}
          visibilityId={'umbra'}
        />
        <Umbra
          visibilityUpdate={this.visibilityUpdate}
          visibilityId={'fluctus'}
        />
      </div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
