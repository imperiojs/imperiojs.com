const React = require('react');
const Gestures = require('./gestures.jsx');
const VisibilityDetector = require('./../main/visibilityDetector.jsx');
const gyroStyles = require('./utils/styles.jsx');

const Iacto = React.createClass({
  propTypes: {
    connections: React.PropTypes.object.isRequired,
    visibilityUpdate: React.PropTypes.func.isRequired,
    visibilityId: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      colors: {
        main: 'rgb(0, 37, 105)',
        active: 'rgb(255, 206, 0)',
      },
      swipeCSS: {},
      panCSS: {},
      pinchCSS: {},
      rotateCSS: {},
      pressCSS: {},
      tapCSS: {},
      carouselContCSS: {},
      carouselCSS: {},
      lastPanLocation: [0, 0],
      currentPanLocation: [0, 0],
      lastRotateAngle: 0,
      currentRotateAngle: 0,
      lastPinchScale: 1,
      currentPinchScale: 1,
      averagedGyroAngle: 0,
      gyroscopeDataStore: [0, 0, 0],
      gyroscopeOn: false,
      gestureMode: true,
      currentGesture: '',
    };
  },

  componentDidMount() {
    imperio.swipeListener(this.handleSwipe);
    imperio.pinchListener(this.handlePinch);
    imperio.panListener(this.handlePan);
    imperio.rotateListener(this.handleRotate);
    imperio.tapListener(this.handleTap);
    imperio.gyroscopeListener(this.gyroFunctions);
    imperio.accelerationListener(this.measureAccelAndRemoveGestures);
  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */

  measureAccelAndRemoveGestures(event) {
    if (!this.state.gyroscopeOn && this.state.gestureMode) {
      if (event.x > 20 || event.y > 20) this.turnGyroOn();
    } else if (this.state.gyroscopeOn && !this.state.gestureMode) {
      if (event.x > 20 || event.y > 20) this.turnGyroOff();
    }
  },

  turnGyroOn() {
    this.setState({
      gestureMode: false,
      lastPanLocation: [0, 0],
      lastRotateAngle: 0,
      lastPinchScale: 1,
      carouselContCSS: gyroStyles.gyroOn.carouselContainer,
      carouselCSS: gyroStyles.gyroOn.carousel,
      swipeCSS: gyroStyles.gyroOn.swipe,
      panCSS: gyroStyles.gyroOn.pan,
      pinchCSS: gyroStyles.gyroOn.pinch,
      rotateCSS: gyroStyles.gyroOn.rotate,
      pressCSS: gyroStyles.gyroOn.press,
      tapCSS: gyroStyles.gyroOn.tap,
    });
    imperio.emitData(null, {
      iactoGyro: true,
    });
    setTimeout(this.startRotation, 3000);
  },

  turnGyroOff() {
    this.setState({
      gyroscopeOn: false,
      carouselContCSS: gyroStyles.gyroOff.carouselContainer,
      carouselCSS: gyroStyles.gyroOff.carousel,
      swipeCSS: gyroStyles.gyroOff.swipe,
      panCSS: gyroStyles.gyroOff.pan,
      pinchCSS: gyroStyles.gyroOff.pinch,
      rotateCSS: gyroStyles.gyroOff.rotate,
      pressCSS: gyroStyles.gyroOff.press,
      tapCSS: gyroStyles.gyroOff.tap,
    });
    imperio.emitData(null, {
      iactoGyro: false,
    });
    setTimeout(this.turnGesturesOn, 3000);
  },

  turnGesturesOn() {
    this.setState({ gestureMode: true, currentGesture: '' });
  },

  startRotation() {
    this.setState({ gyroscopeOn: true, currentGesture: 'GYROSCOPE' });
    setInterval(this.rotate, 50);
  },

  rotate() {
    if (this.state.gyroscopeOn) {
      this.setState({ carouselCSS: {
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${this.state.averagedGyroAngle}deg)`,
      },
      });
    }
  },

  gyroFunctions(gyroDataObject) {
    const dataArray = this.state.gyroscopeDataStore;
    const newAlpha = gyroDataObject.alpha;
    dataArray.shift();
    dataArray.push(newAlpha);
    const alpha = dataArray.reduce((a, b) => { return a + b; }) / dataArray.length;
    this.setState({
      averagedGyroAngle: alpha,
      gyroscopeDataStore: dataArray,
    });
  },

  handleSwipe(event) {
    if (this.state.gestureMode) {
      const multiplier = event.deltaX > 0 ? 1 : -1;
      const magnitude = (5 * (Math.abs(event.velocityX) / 10) + 5 * (event.distance / 1000)) / 10;
      const timing = 150 + 400 * magnitude;
      const skewString = `skewX(${-1 * multiplier * magnitude * 80}deg)`;
      const xPosString = `translate(${multiplier * magnitude * 800}px, 0px)`;
      const swipeStyle = {
        transition: `transform ${timing / 1000}s`,
        transform: `${skewString} ${xPosString}`,
        backgroundColor: this.state.colors.active,
      };
      this.setState({ swipeCSS: swipeStyle, currentGesture: 'SWIPE' });
      setTimeout(() => {
        const prevSwipeStyle = {
          transition: `transform ${timing / 1000}s`,
          transform: 'skewX(0deg) translate(0px, 0px)',
        };
        this.setState({ swipeCSS: prevSwipeStyle, currentGesture: '' });
      }, timing);
    }
  },

  handlePan(event) {
    if (this.state.gestureMode && !event.scroll) {
      const xLoc = this.state.lastPanLocation[0] + event.deltaX;
      const yLoc = this.state.lastPanLocation[1] + event.deltaY;
      this.setState({
        panCSS: {
          transform: `translate(${xLoc}px, ${yLoc}px)`,
          backgroundColor: this.state.colors.active,
        },
        currentGesture: 'PAN',
      });
      if (event.end) {
        this.setState({
          panCSS: { transform: `translate(${xLoc}px, ${yLoc}px)` },
          lastPanLocation: [xLoc, yLoc],
          currentGesture: '',
        });
      }
    }
  },

  handleRotate(event) {
    if (this.state.gestureMode) {
      const angle = this.state.lastRotateAngle + event.rotation;
      this.setState({
        rotateCSS: {
          transform: `rotate(${angle}deg)`,
          backgroundColor: this.state.colors.active,
        },
        currentGesture: 'ROTATE',
      });
      if (event.end) {
        this.setState({
          rotateCSS: { transform: `rotate(${angle}deg)` },
          lastRotateAngle: angle,
          currentGesture: '',
        });
      }
    }
  },

  handlePinch(event) {
    if (this.state.gestureMode) {
      const pinchScale = this.state.lastPinchScale * event.scale;
      this.setState({
        pinchCSS: {
          transform: `scale(${pinchScale})`,
          backgroundColor: this.state.colors.active,
        },
        currentGesture: 'PINCH',
      });
      if (event.end) {
        this.setState({
          pinchCSS: { transform: `scale(${pinchScale})` },
          lastPinchScale: pinchScale,
          currentGesture: '',
        });
      }
    }
  },

  handleTap() {
    if (this.state.gestureMode) {
      const timing = 0.25;
      const tapStyle = {
        transition: `height ${timing}s, width ${timing}s`,
        height: '50px',
        width: '350px',
        backgroundColor: this.state.colors.active,
      };
      this.setState({ tapCSS: tapStyle, currentGesture: 'TAP' });
      setTimeout(() => {
        const prevTapStyle = {
          transition: `height ${timing}s, width ${timing}s`,
          height: '150px',
          width: '150px',
        };
        this.setState({ tapCSS: prevTapStyle, currentGesture: '' });
      }, timing * 1000);
    }
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */

  render() {
    let instructions = '';
    let emitter = false;
    for (let key in this.props.connections) {
      if (this.props.connections[key] === 'emitter') emitter = true;
    }
    if (!emitter) {
      instructions += 'Connect your mobile device to interact';
    } else {
      if (this.state.gyroscopeOn) {
        instructions += 'Wave device to enable gestures';
      } else {
        instructions += 'Wave device to enable sensors';
      }
    }
    return (
      <div id="iacto-container">
        <p id="gesture-id">{this.state.currentGesture ? this.state.currentGesture : 'imperioJS'}</p>
        <Gestures
          currentPanLocation={this.state.currentPanLocation}
          currentRotateAngle={this.state.currentRotateAngle}
          currentPinchScale={this.state.currentPinchScale}
          swipeCSS={this.state.swipeCSS}
          panCSS={this.state.panCSS}
          pinchCSS={this.state.pinchCSS}
          rotateCSS={this.state.rotateCSS}
          pressCSS={this.state.pressCSS}
          tapCSS={this.state.tapCSS}
          carouselContCSS={this.state.carouselContCSS}
          carouselCSS={this.state.carouselCSS}
          gyroscopeOn={this.state.gyroscopeOn}
          connections={this.props.connections}
          visibilityUpdate={this.props.visibilityUpdate}
          visibilityId={this.props.visibilityId}
        />
        <VisibilityDetector
          visibilityUpdate={this.props.visibilityUpdate}
          visibilityId={this.props.visibilityId}
        />
        <p id="instructions">{instructions}</p>
      </div>

    );
  },
});

module.exports = Iacto;
