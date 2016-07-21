const React = require('react');
const Visibility = require('react-component-visibility');

const Example3 = React.createClass({
  mixins: [Visibility],

  componentVisibilityChanged() {
    const update = { example3: this.state.visible };
    this.props.visibilityUpdate(update);
  },


  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div style={{height: "700px", border: "1px solid black"}}>
        <div>Hello, I am Example3</div>
      </div>
    );
  },
});

module.exports = Example3;
