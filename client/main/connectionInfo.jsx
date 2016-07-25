const React = require('react');

const ConnectionInfo = React.createClass({
  propTypes: {
    connections: React.PropTypes.object.isRequired,
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    // TODO include connection type! (webRTC vs sockets)
    const connectionKeys = Object.keys(this.props.connections);
    let connections = [];
    if (connectionKeys.length > 0) {
      for (const key of connectionKeys) {
        // if (this.props.connections[key] === 'listener') {
        //   connections += <p>{`${key} + ${this.props.connections[key]}`}</p>;
        // }
        connections.push(<p key={key}>{key + ': ' + this.props.connections[key]}</p>);
      }
    }
    let displayConnectionStatus;
    if (connectionKeys.length > 1) {
      displayConnectionStatus = <p>Connected! ({imperio.nonce})</p>;
    }
    else {
      displayConnectionStatus = <p>Connect: {imperio.nonce}</p>;
    }
    return (
      <div id="connection-wrap">
        <div id="connection">
          {displayConnectionStatus}
        </div>
      </div>
    );
  },
});

module.exports = ConnectionInfo;
