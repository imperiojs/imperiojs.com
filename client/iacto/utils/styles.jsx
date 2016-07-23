const styles = {};

styles.gyroOn = {};
styles.gyroOff = {};

styles.gyroOn.carouselContainer = {
  display: 'block',
  margin: '0 auto',
  width: '150px',
  height: '150px',
  position: 'relative',
  perspective: '1000px',
};
styles.gyroOff.carouselContainer = {
  display: '',
  margin: '',
  width: '100%',
  height: '',
  position: '',
  perspective: '',
};

styles.gyroOn.carousel = {
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
};
styles.gyroOff.carousel = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '',
  width: '100%',
  height: '200px',
  transformStyle: '',
};

const gestureArray = ['swipe', 'pan', 'pinch', 'rotate', 'press', 'tap'];

for (let i = 0; i < gestureArray.length; i++) {
  styles.gyroOn[gestureArray[i]] = {
    transition: 'transform 3s',
    display: 'block',
    position: 'absolute',
    width: '150px',
    height: '150px',
    lineHeight: '200px',
    border: '4px solid rgb(255, 206, 0)',
    transform: `rotateY(${i * 60}deg) translateZ(450px)`,
  };
  styles.gyroOff[gestureArray[i]] = {
    transition: 'transform 3s',
  };
}

module.exports = styles;
