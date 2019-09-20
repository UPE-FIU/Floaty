import axios from "axios";

const client = axios.create({
  baseURL: "https://api.shellhacks.net/"
});

/**
 * Get announcements
 */
const getAnnoucements = () => {
  client
    .get({
      url: "announcements"
    })
    .then(resp => resp.data.data)
    .catch(err => err.data);
};

/**
 * Get schedules
 */
const getEvents = () => {
  client
    .get({
      url: "events"
    })
    .then(resp => resp.data.data)
    .catch(err => err.data);
};

export default { getAnnoucements, getEvents };
