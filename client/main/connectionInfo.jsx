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
    console.log('connectionKeys:', connectionKeys);
    let connections = [];
    if (connectionKeys.length > 0) {
      console.log('length > 0!');
      for (const key of connectionKeys) {
        // if (this.props.connections[key] === 'listener') {
        //   connections += <p>{`${key} + ${this.props.connections[key]}`}</p>;
        // }
        connections.push(<p key={key}>{key + this.props.connections[key]}</p>);
      }
    }
    console.log('connections', connections);
    return (
      <div id="connection-wrap">
        {connections}
        <div id="connection">Connect: {imperio.nonce}</div>
      </div>
    );
  },
});

module.exports = ConnectionInfo;
