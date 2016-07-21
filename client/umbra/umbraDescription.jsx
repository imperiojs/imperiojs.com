const React = require('react');

const UmbraDescription = React.createClass({
  // propTypes: {
  //   textShadows: React.PropTypes.string.isRequired,
  // },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec hendrerit sapien, sit amet euismod lorem. Morbi quam lorem, laoreet ac pulvinar eget, viverra vitae libero. Phasellus sed ante ac sapien mollis viverra. Quisque placerat scelerisque felis sed imperdiet. Vivamus pellentesque tempus lacus vitae egestas. Vivamus maximus facilisis nisi. Sed sem orci, tincidunt eu massa eget, lacinia interdum nisl. Sed pharetra scelerisque orci. Curabitur pharetra vestibulum risus.</p>
        <p>Vestibulum nec eleifend risus. Proin quis hendrerit justo. Vivamus tellus ligula, imperdiet eget lorem a, mollis interdum purus. Mauris lacinia a urna ac vestibulum. Aliquam quis nisi in eros vestibulum bibendum. Duis sed consequat massa. Donec porttitor augue lacus. In vel consequat nisl. Vestibulum dolor arcu, tempus ac metus eget, pellentesque porta dui. Praesent ut consectetur purus, ac tempus magna. Morbi tristique elit eu velit fermentum gravida. Integer quis imperdiet enim. Fusce congue, sapien nec mollis dignissim, quam risus scelerisque arcu, congue sagittis lectus mauris eget quam.</p>
        <pre>
          imperio.gyroscopeListener(this.updateUmbra);<br />
          imperio.dataListener(this.setZeros);
        </pre>
      </div>
    );
  },
});

module.exports = UmbraDescription;
