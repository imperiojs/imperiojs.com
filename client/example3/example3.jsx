const React = require('react');
const Visibility = require('react-component-visibility');

const Example3 = React.createClass({
  mixins: [Visibility],

  componentVisibilityChanged() {
    if (this.state.visible) {
      console.log('Example3 is visible');
    } else {
      console.log('Example3 is no longer visible');
    }
    const update = { example3: this.state.visible };
    this.props.visibilityUpdate(update);
  },


  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div style={{height: "700px", border: "1px solid black"}}>
        <div>Hello, I am Umbra</div>
      </div>
    );
  },
});

module.exports = Example3;
