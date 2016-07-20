const React = require('react');

const VisibilityBox = React.createClass({
  propTypes: {
    isVisible: React.PropTypes.object.isRequired,
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    let visibilityList = [];
    for (let example in this.props.isVisible) { // eslint-disable-line
      if (this.props.isVisible.hasOwnProperty(example)) {
        visibilityList.push(
          <li key={example}>
            {`${example}: ${this.props.isVisible[example]}`}
          </li>
        );
      }
    }
    return (
      <div className="visibility-list">
        <ul>
          {visibilityList}
        </ul>
      </div>
    );
  },
});

module.exports = VisibilityBox;
