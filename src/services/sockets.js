/**
 * Real-time update service
 */

const io = require("socket.io-client");
const socket = io.connect("https://api.shellhacks.net");

export default socket;
