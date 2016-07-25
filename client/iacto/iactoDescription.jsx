const React = require('react');

const IactoDescription = React.createClass({
  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div className="description">
        <p>Time to try out imperio! Make sure your mobile device is hooked up to the URL at the top of the screen. Once you connect the mobile, feel free to scroll up and down the page by panning on the scroll bar.</p>
        <p>The first demo shows six common gestures used on touchscreens: swipe, pan, pinch, rotate, press, and tap. You don't just have to look anymore- communicate with the DOM in real-time by interacting with the mobile.</p>
        <p>When you're done with the gestures, flick your phone and use the accelerometer to turn on sensor mode. Control the screen by rotating the screen about the axis normal to the screen!</p>
      </div>
    );
  },
});

module.exports = IactoDescription;
