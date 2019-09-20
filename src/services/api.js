import axios from "axios";

const client = axios.create({
  baseURL: "https://api.shellhacks.net/"
});

/**
 * Get announcements
 */
const getAnnoucements = () =>
  client.get({
    url: "announcements"
  });

/**
 * Get schedules
 */
const getEvents = () =>
  client.get({
    url: "events"
  });

export default { getAnnoucements, getEvents };
