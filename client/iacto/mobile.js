var panDiv = document.getElementById('pan-box');
var swipeDiv = document.getElementById('swipe-box');
var rotateDiv = document.getElementById('rotate-box');
var pinchDiv = document.getElementById('pinch-box');
var tapDiv = document.getElementById('tap-box');
var gestures = document.getElementsByClassName('gestures');
var angles = document.getElementById('angles');

imperio.gesture('swipe', swipeDiv);
imperio.gesture('pinch', pinchDiv);
imperio.gesture('pan', panDiv);
imperio.gesture('rotate', rotateDiv);
imperio.gesture('press', panDiv);
imperio.gesture('pressUp', panDiv);
imperio.gesture('tap', tapDiv);

function handleGyro(event) {
  angles.innerHTML = `${event.alpha}&#176;`;
}

imperio.dataListener(dataHandler);

//manipulate data based on browser state
function dataHandler(data) {
  if (data && data.hasOwnProperty('action') && action === 'gyroToggle') {

    var timing = 2, blue = 'rgb(0, 37, 105)', gold = 'rgb(255, 206, 0)';
    if (data.gyroState === 'on') {
      var gyroSize = '3em';
      for (var i = 0; i < gestures.length; i++) {
        gestures[i].style.transition = `height ${timing}s, border ${timing}s, color ${timing}s`;
        gestures[i].style.height = '0px';
        gestures[i].style.borderColor = blue;
        gestures[i].style.color = blue;
      }
      angles.style.border = `3px solid ${gold}`;
      angles.style.color = gold;
      angles.style.height = gyroSize;
      angles.style.width = gyroSize;
      angles.style.fontSize = '75px';
      angles.style.marginTop = '25px';
    } else if (data.gyroState === 'off') {
      for (var i = 0; i < gestures.length; i++) {
        gestures[i].style.transition = `height ${timing}s, border ${timing}s, color ${timing}s`;
        gestures[i].style.height = '4em';
        gestures[i].style.borderColor = gold;
        gestures[i].style.color = gold;
      }
      angles.style.border = `${blue} solid`;
      angles.style.color = blue;
      angles.style.fontSize = '0px';
      angles.style.height = '0px';
      angles.style.marginTop = '0px';
    }
  }
}
