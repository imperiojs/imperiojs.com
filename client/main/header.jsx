const React = require('react');

const Header = React.createClass({
  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div id="header" style={{ height: "700px", border: "1px solid black" }}>
        <h1>Imperio</h1>
        <h3>unleash the power of your mobile device!</h3>
      </div>
    );
  },
});

module.exports = Header;
