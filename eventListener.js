const EventManagement = require('FSD_Lab2\EventManagement.js');
const eventManager = new EventManagement();
eventManager.on('start', () => {
  console.log("Listening: The event has started.");
});
eventManager.on('in-progress', () => {
  console.log("Listening: The event is in progress.");
});
eventManager.on('completed', () => {
  console.log("Listening: The event has been completed.");
});
eventManager.startEvent();
eventManager.inProgressEvent();
eventManager.completeEvent();