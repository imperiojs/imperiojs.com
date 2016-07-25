const React = require('react');

const UmbraDescription2 = React.createClass({
  // propTypes: {
  //   textShadows: React.PropTypes.string.isRequired,
  // },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div className="description">
        <p>All this is handled with some nifty CSS and a few methods from the imperio library. In the javascript for the host desktop computer, or "listener," we create a room that a mobile device can join, and then set up the listeners for the mobile device's gyroscope sensor data.</p>
        <pre>
          imperio.listenerRoomSetup();<br />
          imperio.roomUpdate();<br />
          imperio.gyroscopeListener(updateUmbra);<br />
          imperio.dataListener(setZeros);<br />
        </pre>
        <p>In the javascript for the mobile device, or "emitter," we connect to the host desktop computer and start emitting gyroscope data. A tap gesture sends the values from a global object in the mobile javascript to set the zero angle of our shadow demo on the desktop.</p>
        <pre>
          imperio.emitGyroscope.start(printGyroData);<br />
          document.body.addEventListener('touchend', function() {"{"}<br />
            &nbsp; imperio.emitData(tapFeedback, zero);<br />
          {"}"});<br />
        </pre>
        <p>The connection between the two is all handled by imperio's middleware.</p>
        <pre>att.get('/', imperio.init(), (req, res) => {"{"} //Serve up html here {"}"});</pre>
        <p>We hope you enjoyed this brief glimpse into what's possible with imperio! Fork and star us on github, and check back soon for more demos and projects using imperio!</p>
      </div>
    );
  },
});

module.exports = UmbraDescription2;
