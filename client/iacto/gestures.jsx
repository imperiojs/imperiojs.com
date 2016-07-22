const React = require('react');

const Gestures = React.createClass({

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    const gestureArray = ['swipe', 'pan', 'pinch', 'rotate', 'press', 'tap'];
    const ExampleArray = gestureArray.map(event => {
      const example = `${event}-example`;
      if (event === 'swipe') {
        return <div id={example} className="gesture" style={this.props.swipeCSS}></div>;
      } else if (event === 'pan') {
        return <div id={example} className="gesture" style={this.props.panCSS}></div>;
      } else if (event === 'pinch') {
        return <div id={example} className="gesture" style={this.props.pinchCSS}></div>;
      } else if (event === 'rotate') {
        return <div id={example} className="gesture" style={this.props.rotateCSS}></div>;
      } else if (event === 'press') {
        return <div id={example} className="gesture" style={this.props.pressCSS}></div>;
      } else if (event === 'tap') {
        return <div id={example} className="gesture" style={this.props.tapCSS}></div>;
      }
    });
    return (
      <div id="carousel-container" style={this.props.carouselContCSS}>
        <div id="gesture-container" style={this.props.carouselCSS}>
          {ExampleArray}
        </div>
      </div>
    );
  },
});

module.exports = Gestures;
