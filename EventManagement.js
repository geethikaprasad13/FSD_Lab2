const EventManagement = require('events');
const eventManager = new EventManagement();
eventManager.on('start', () => {
  console.log('Listener: Event Started.');
});
eventManager.on('in-progress', () => {
  console.log('Listener: Event In Progress.');
});
eventManager.on('completed', () => {
  console.log('Listener: Event Completed.');
});
eventManager.startEvent();
eventManager.inProgressEvent();
eventManager.completeEvent();