const React = require('react');
const VisibilityDetector = require('./../main/visibilityDetector.jsx');

const Caster = React.createClass({
  propTypes: {
    visibilityUpdate: React.PropTypes.func.isRequired,
    visibilityId: React.PropTypes.string.isRequired,
    textShadows: React.PropTypes.string.isRequired,
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    const textShadowStyle = { textShadow: this.props.textShadows };
    return (
      <div id="caster-wrap">
        <div className="caster" style={textShadowStyle}>Imperio!</div>
        <VisibilityDetector
          visibilityUpdate={this.props.visibilityUpdate}
          visibilityId={this.props.visibilityId}
        />
      </div>
    );
  },
});

module.exports = Caster;
