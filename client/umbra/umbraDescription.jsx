const React = require('react');

const UmbraDescription = React.createClass({
  // propTypes: {
  //   textShadows: React.PropTypes.string.isRequired,
  // },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div className="description">
        <p>Once your mobile device is connected to imperiojs.com by entering the connect code at the top of the window into your mobile device's url, point your device directly at the center of the screen, then top somewhere on the mobile device to calibrate this demo.</p>
        <p>You'll notice a shadow creeping out from behind the Imperio text. Move your device around in front of the screen to point at the Imperio text as if it were a flashlight. The sahdow will move and extend, as if light were eminating from the tip of your mobile device and through the screen!</p>
      </div>
    );
  },
});

module.exports = UmbraDescription;
