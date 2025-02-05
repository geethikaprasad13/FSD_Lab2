const EventManagement = require('./EventManagement');

// Instantiate EventManagement to listen to events
const eventManager = new EventManagement();

// Listen for the 'start' event
eventManager.on('start', () => {
  console.log("Listening: The event has started.");
});

// Listen for the 'in-progress' event
eventManager.on('in-progress', () => {
  console.log("Listening: The event is in progress.");
});

// Listen for the 'completed' event
eventManager.on('completed', () => {
  console.log("Listening: The event has been completed.");
});

// Trigger the events
eventManager.startEvent();
eventManager.inProgressEvent();
eventManager.completeEvent();
