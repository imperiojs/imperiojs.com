var socket2 = io("fluctus.herokuapp.com", { "force new connections": true });

imperio.mobileRoomSetup(function(socket) {
  var rooms = socket.rooms || 'no rooms';
  console.log('ROOMS AFTER MOBILE ROOM SETUP: ', rooms);
});
