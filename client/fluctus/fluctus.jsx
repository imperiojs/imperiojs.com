const React = require('react');
const Visibility = require('react-component-visibility');

const Fluctus = React.createClass({
  mixins: [Visibility],

  componentVisibilityChanged() {
    if (this.state.visible) {
      console.log('Fluctus is visible');
    } else {
      console.log('Fluctus is no longer visible');
    }
    const update = { fluctus: this.state.visible };
    this.props.visibilityUpdate(update);
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div style={{height: "700px", border: "1px solid black"}}>
        <div>Hello, I am Fluctus</div>
      </div>
    );
  },
});

module.exports = Fluctus;
