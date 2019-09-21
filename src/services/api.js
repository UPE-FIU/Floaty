import axios from "axios";

// const client = axios.create({
//   baseURL: "https://api.shellhacks.net/"
// });

const URL = 'https://api.shellhacks.net';

/**
 * Get announcements
 */
const getAnnoucements = async () => {
  const {data} =  await axios.get('https://api.shellhacks.net/announcement').then((info)=>info)
  return data.data
};

/**
 * Get schedules
 */
const getEvents = async () => {

  const {data} =  await axios.get('https://api.shellhacks.net/schedule')

  return data.data
};
export default { getAnnoucements, getEvents };
