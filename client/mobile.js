var scrollBar = document.getElementById('scroll-bar');
var base = document.getElementById('base');

var browserState = {
  iacto: {
    on: false,
    gyro: false,
  },
  umbra: false,
  fluctus: false,
}

// emitData listener from desktop
// data transferred in two situations:
imperio.dataListener(updateBrowserState);

function updateBrowserState(browserViewData) {
  if (browserViewData.hasOwnProperty('iacto') ||
      browserViewData.hasOwnProperty('umbra') ||
      browserViewData.hasOwnProperty('fluctus')) {
    console.log('state update recevied:');
    console.log('browserViewData: ' + JSON.stringify(browserViewData, null, 2));
    if (browserViewData.iacto) browserState.iacto.on = true;
    else browserState.iacto.on = false;
    if (browserViewData.iactoGyro) browserState.iacto.gyro = true;
    else browserState.iacto.gyro = false;
    if (browserViewData.umbra) browserState.umbra = true;
    else browserState.umbra = false;
    if (browserViewData.fluctus) browserState.fluctus = true;
    else browserState.fluctus = false;
    console.log('browserState: ' + JSON.stringify(browserState, null, 2));
    renderMobile();
  }
}

// turns on and off mobile emitters conditionally
function renderMobile() {
  if (browserState.hasOwnProperty('iacto')) {
    if (browserState.iacto.on) {
      console.log('rendering iacto');
      renderIacto();
      removeBase();
      if (!browserState.iacto.gyro) turnGyroOff();
      else turnGyroOn();
    } else
      removeIacto();

    if (browserState.umbra) {
      renderUmbra();
      removeBase();
    } else
      removeUmbra();

    // if (browserState.fluctus) {
    //   renderFluctus();
    //   removeBase();
    // } else removeFluctus();

    if (!browserState.iacto.on && !browserState.umbra && !browserState.fluctus) {
      renderBase();
    }
  }
}

function renderBase() {
  base.style.display = 'flex';
}

function removeBase() {
  base.style.display = 'none';
}

imperio.gesture('pan', scrollBar, null, handleScrollPan);

function handleScrollPan(event) {
  event.scroll = true;
  return event;
}

// Connect to imperio socket room
imperio.emitRoomSetup(function(socket) {
  console.log('socket', socket);
  var rooms = socket.rooms || 'no rooms';
  console.log('ROOMS AFTER MOBILE ROOM SETUP: ', rooms);
});
