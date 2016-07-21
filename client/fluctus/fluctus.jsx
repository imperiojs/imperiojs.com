const React = require('react');
const Visibility = require('react-component-visibility');

const Fluctus = React.createClass({
  mixins: [Visibility],

  componentVisibilityChanged() {
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
