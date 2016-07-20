const React = require('react');
const Visibility = require('react-component-visibility');
const Caster = require('./caster.jsx');
const UmbraDescription = require('./umbraDescription.jsx');

const Umbra = React.createClass({
  propTypes: {
    visibilityUpdate: React.PropTypes.func.isRequired,
  },

  mixins: [Visibility],

  getInitialState() {
    return {
      zero: {
        alpha: 0,
        beta: 0,
        gamma: 0,
      },
      textShadows: '',
    };
  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */

  componentDidMount() {
    imperio.gyroscopeListener(this.updateUmbra);
    imperio.dataListener(this.setZeros);
  },

  /* Method provided by react-component-visibility mixin
   * Invokes prop function visibilityUpdate
   */
  componentVisibilityChanged() {
    const update = { umbra: this.state.visible };
    this.props.visibilityUpdate(update);
  },

  setZeros(gyroData) {
    console.log('We got the tap data!', gyroData);
    this.setState({ zero: gyroData });
  },

  updateUmbra(gyroObj) {
    console.log('updating umbra: ', gyroObj);
    // actual alpha & beta will be between 0 and 180/-180, and offset by zeros
    const actual = this.orientRawGyroData(gyroObj);
    const offsetInterval = 8;
    const offsetX = -actual.alpha * offsetInterval / 90;
    const offsetY = -actual.beta * offsetInterval / 90;
    const offsetDist = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
    const blur = 50;
    const numShadows = 25;

    // build up the textShadow style string
    let textShadows = '';
    for (let i = 1; i < numShadows; i++) {
      textShadows += `${offsetX * i}px `;
      textShadows += `${offsetY * i}px `;
      textShadows += `${blur * i / numShadows * Math.abs(offsetDist) / 10}px `;
      // textShadows += `rgba(20, 20, 20, ${1 - (0.8 - (0.8 / i))})`;
      textShadows += 'rgba(40, 40, 40, 1)';
      if (i < numShadows - 1) textShadows += ', ';
    }

    this.setState({ textShadows });
  },

  orientRawGyroData(gyro) {
    // we need to normalize the alpha angle from (0 => 360) to (-180 => 180)
    const normAlpha = (gyro.alpha > 180) ? gyro.alpha - 360 : gyro.alpha;

    // correct raw angles by offsetting by zero orientation
    return {
      alpha: normAlpha - this.state.zero.alpha,
      beta: gyro.beta - this.state.zero.beta,
      gamma: gyro.gamma - this.state.zero.gamma,
    };
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    return (
      <div className="demo-box">
        <Caster textShadows={this.state.textShadows} />
        <UmbraDescription />
      </div>
    );
  },
});

module.exports = Umbra;
