var panDiv = document.getElementById('pan-box');
var swipeDiv = document.getElementById('swipe-box');
var rotateDiv = document.getElementById('rotate-box');
var pinchDiv = document.getElementById('pinch-box');
var tapDiv = document.getElementById('tap-box');
var iacto = document.getElementById('iactoMobile');
var gestures = document.getElementsByClassName('gestures');
var angles = document.getElementById('angles');

imperio.gesture('swipe', swipeDiv);
imperio.gesture('pinch', pinchDiv);
imperio.gesture('pan', panDiv);
imperio.gesture('rotate', rotateDiv);
imperio.gesture('press', panDiv);
imperio.gesture('pressUp', panDiv);
imperio.gesture('tap', tapDiv);

function renderIacto() {
  console.log('in iacto on');
  iacto.style.display = 'flex';
  for (var i = 0; i < gestures.length; i++) {
    document.getElementById(gestures[i].id).style.display = 'flex';
  }
  imperio.emitAcceleration.gravity();
  imperio.emitGyroscope.start(handleGyro);
}

function handleGyro(event) {
  angles.innerHTML = `${event.alpha}&#176;`;
}

function removeIacto() {
  console.log('in iacto OFF');
  iacto.style.display = 'none';
  for (var i = 0; i < gestures.length; i++) {
    document.getElementById(gestures[i].id).style.display = 'none';
  }
  imperio.emitAcceleration.removeGravity();
  imperio.emitGyroscope.remove(handleGyro);
}

function turnGyroOn() {
  console.log('gyro on');
  var timing = 2, blue = 'rgb(0, 37, 105)', gold = 'rgb(255, 206, 0)', gyroSize= '1.5em';
  for (var i = 0; i < gestures.length; i++) {
    gestures[i].style.transition = `height ${timing}s, border ${timing}s, color ${timing}s`;
    gestures[i].style.borderColor = blue;
    gestures[i].style.color = blue;
  }
  angles.style.border = `3px solid ${gold}`;
  angles.style.color = gold;
  angles.style.height = gyroSize;
  angles.style.width = gyroSize;
  angles.style.fontSize = '75px';
  angles.style.marginTop = '25px';
}

function turnGyroOff() {
  console.log('gyro off');
  var timing = 2, blue = 'rgb(0, 37, 105)', gold = 'rgb(255, 206, 0)';
  for (var i = 0; i < gestures.length; i++) {
    gestures[i].style.transition = `height ${timing}s, border ${timing}s, color ${timing}s`;
    gestures[i].style.borderColor = gold;
    gestures[i].style.color = gold;
  }
  setTimeout(setDelayedStyleOff, 1750);
  angles.style.border = `${blue} solid`;
  angles.style.color = blue;
  angles.style.fontSize = '0px';
  angles.style.height = '0px';
  angles.style.marginTop = '0px';
}

// function setDelayedStyleOn() {
//   .style.display = 'block';
// }

function setDelayedStyleOff() {
  var timing = 0.25;
  for (var i = 0; i < gestures.length; i++) {
    gestures[i].style.transition = `height ${timing}s, border ${timing}s, color ${timing}s`;
  }
}
