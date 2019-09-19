/**
 * Real-time update service
 */

const io = require("socket.io-client");
const socket = io.connect("http://c083ff71.ngrok.io/");

/**
 * Triggers when on new annoucements
 */
const announcementEvent = socket.on("announcement", data => {
  console.log(data);
});

/**
 * Triggers when on new events
 */
const scheduleEvent = socket.on("schedule_updated", () => {
  console.log("refresh page");
});

export default { announcementEvent, scheduleEvent };
