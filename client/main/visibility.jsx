const React = require('react');

const VisibilityBox = React.createClass({

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    let visibilityList = [];
    for (let example in this.props.isVisible) {
      visibilityList.push(<li key={example}>{`${example}: ${this.props.isVisible[example]}`}</li>);
    }
    return (
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '200px',
        height: '100px',
        border: '1px solid red',
      }}>
        <div>
          <ul>
            {visibilityList}
          </ul>
        </div>
      </div>
    );
  },
});

module.exports = VisibilityBox;
