// Connect to imperio socket room
imperio.emitRoomSetup(function(socket) {
  console.log('socket', socket);
  var rooms = socket.rooms || 'no rooms';
  console.log('ROOMS AFTER MOBILE ROOM SETUP: ', rooms);
});
console.log('what the hellllll');
// emitData listener from desktop - fired when examples scroll into view
imperio.dataListener(handleImperioEmitters);

// turns on and off mobile emitters conditionally
function handleImperioEmitters(actionObj) {
  console.log('handleImperioEmitters called!');
  if (actionObj && actionObj.hasOwnProperty('action')) {
    console.log('action object:', actionObj);
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

    // ------ Umbra Emitters ------
    if (actionObj.action === 'start_iacto') {
      console.log('adding Iacto event listeners');
      document.getElementById('iactoMobile').style.display = 'block';
      imperio.emitAcceleration.gravity();
      imperio.emitGyroscope.start(handleGyro);
    }
    else if (actionObj.action === 'stop_iacto') {
      console.log('removing Iacto listeners');
      document.getElementById('iactoMobile').style.display = 'none';
      imperio.emitAcceleration.removeGravity();
      imperio.emitGyroscope.remove(handleGyro);
    }

  } else {
    console.log('no actionObj');
  }
}
