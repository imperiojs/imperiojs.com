var scrollBar = document.getElementById('scroll-bar');


//THIS DOESN'T SEEM TO BE WORKING PROPERLY
document.addEventListener('ontouchstart', function(e) {
  e.preventDefault(); 
}, false);
document.addEventListener('ontouchmove', function(e) {
  e.preventDefault(); 
}, false);

function handleScrollPan(event) {
  event.scroll = true;
  return event;
}

imperio.gesture('pan', scrollBar, null, handleScrollPan);

// Connect to imperio socket room
imperio.emitRoomSetup(function(socket) {
  console.log('socket', socket);
  var rooms = socket.rooms || 'no rooms';
  console.log('ROOMS AFTER MOBILE ROOM SETUP: ', rooms);
});

// emitData listener from desktop - fired when examples scroll into view
imperio.dataListener(handleImperioEmitters);

// turns on and off mobile emitters conditionally
function handleImperioEmitters(actionObj) {
  // ------ Iacto Emitters ------
  if (actionObj.action === 'start_iacto') {
    console.log('adding Iacto event listeners');
    document.getElementById('iactoMobile').style.display = 'flex';
    imperio.emitAcceleration.gravity();
    imperio.emitGyroscope.start(handleGyro);
  }
  else if (actionObj.action === 'stop_iacto') {
    console.log('removing Iacto listeners');
    document.getElementById('iactoMobile').style.display = 'none';
    imperio.emitAcceleration.removeGravity();
    imperio.emitGyroscope.remove(handleGyro);
  }

  if (actionObj && actionObj.hasOwnProperty('action')) {
    // ------ Umbra Emitters ------
    if (actionObj.action === 'start_umbra') {
      console.log('adding Umbra event listeners');
      document.getElementById('umbraMobile').style.display = 'block';
      document.body.addEventListener('touchend', emitNewZeroValues);
      imperio.emitGyroscope.start(printGyroData);
    }
    else if (actionObj.action === 'stop_umbra') {
      console.log('removing Umbra listeners');
      document.getElementById('umbraMobile').style.display = 'none';
      document.body.removeEventListener('touchend', emitNewZeroValues);
      imperio.emitGyroscope.remove(printGyroData);
    }
  } else {
    console.log('no actionObj');
  }
}
