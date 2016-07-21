const React = require('react');
const Visibility = require('react-component-visibility');

const VisibilityDetector = React.createClass({
  propTypes: {
    visibilityUpdate: React.PropTypes.func.isRequired,
    visibilityId: React.PropTypes.string.isRequired,
  },

  mixins: [Visibility],

  /* Method provided by react-component-visibility mixin
   * Invokes prop function visibilityUpdate
   */
  componentVisibilityChanged() {
    const update = {};
    update[this.props.visibilityId] = this.state.visible;
    this.props.visibilityUpdate(update);
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div className="visibility-detector"></div>
    );
  },
});

module.exports = VisibilityDetector;
