const React = require('react');

const IactoDescription2 = React.createClass({
  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div className="description">
        <p>imperio makes all this possible in minimal code. Here are the front end functions necessary to hook up the panning gesture datastream from the mobile to the desktop:</p>
        <p>Mobile:</p>
        <pre>
          imperio.emitRoomSetup();<br />
          imperio.gesture('pan', DOMElement);
        </pre>
        <p>Desktop:</p>
        <pre>
          imperio.listenerRoomSetup();<br />
          imperio.panListener(handlePan);
        </pre>
        <p>Server:</p>
        <pre>
          imperio.init();<br />
        </pre>
      </div>
    );
  },
});

module.exports = IactoDescription2;