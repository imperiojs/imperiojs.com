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
        connections.push(<p>{key + ': ' + this.props.connections[key]}</p>);
      }
    }
    return (
      <div id="connection-wrap">
        {connections}
        <div id="connection">
          {connections}
          <p>Connect: {imperio.nonce}</p>
        </div>
      </div>
    );
  },
});

module.exports = ConnectionInfo;
