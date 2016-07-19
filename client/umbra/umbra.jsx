const React = require('react');
const Visibility = require('react-component-visibility');

const Umbra = React.createClass({
  mixins: [Visibility],

  componentVisibilityChanged() {
    if (this.state.visible) {
      console.log('Umbra is visible');
    } else {
      console.log('Umbra is no longer visible');
    }
    const update = { umbra: this.state.visible };
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

module.exports = Umbra;
