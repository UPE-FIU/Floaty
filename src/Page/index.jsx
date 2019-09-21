import React, { useState, useEffect } from "react";
import { store } from "react-notifications-component";
import AnimatedWaves from "../components/AnimatedWaves";

import List from "../components/List";
import Card from "../components/Card";
import MLHBadge from "../components/MLHBadge";
import Organizers from "../components/Organizers";
import Demo from "../components/Demo";
// import Music from "../components/Music";
import Timer from "../components/Timer";
import SocialMedia from "../components/SocialMedia";
import Notify from "../components/Notification";
import styles from "./Page.module.scss";

import sockets from "../services/sockets";
import services from "../services/api";
import moment from "moment";

const Live = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getEvs = async () => {
    const data = await services.getEvents();
    setEvents(data);

    // setSuccess("New Event!");
    // store.addNotification({
    //   title: "New Event",
    //   message: "A new event have been added",
    //   type: "success",
    //   insert: "bottom",
    //   container: "bottom-center",
    //   animationIn: ["animated", "fadeIn"],
    //   animationOut: ["animated", "fadeOut"],
    //   dismiss: {
    //     duration: 5000,
    //     onScreen: true
  };

  const getAnns = async () => {
    const data = await services.getAnnoucements();
    setAnnouncements(data);
    // .then(resp => {
    //   console.log("sfhksvk797hsv");

    //   setAnnouncements(resp);
    //   setSuccess("New Notification!");

    //   store.addNotification({
    //     title: "New Notification",
    //     message: "check the annoucements list",
    //     type: "success",
    //     insert: "bottom",
    //     container: "bottom-center",
    //     animationIn: ["animated", "fadeIn"],
    //     animationOut: ["animated", "fadeOut"],
    //     dismiss: {
    //       duration: 5000,
    //       onScreen: true
    //     }
    //   });
    // })
    // .catch(err => {
    //   setError(err.data);
    // });
  };

  useEffect(() => {
    getAnns();
    getEvs();
  }, []);

  /**
   * Triggers when on new annoucements
   */
  sockets.on("announcement", data => {
    console.log(data);
    getAnns();
  });

  /**
   * Triggers when on new events
   */
  sockets.on("schedule_updated", () => {
    console.log("refresh page");
    getEvs();
  });

  return (
    <div>
      <MLHBadge />
      <AnimatedWaves>
      <div className={styles.message}>
            <h1>Sorry buddy, We don't do mobile...</h1>
          </div>
        <div className={styles.pageContainer}>
        
          {error && <Notify />}
          {success && <Notify />}

          <div className={styles.leftContainer}>
            <Organizers />
            <Demo />
            <SocialMedia />
            {/* <Music /> */}
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.timerContainer}>
              <Timer />
            </div>
            <div className={styles.scheduleAndAnnouncements}>
              <List>
                {announcements.map((card, i) => (
                  <Card key={i}>
                    <h2>{card.title}</h2>
                    <h3>{card.body}</h3>
                    <h3>{card.category}</h3>
                    <h3>{card.sendTime}</h3>
                    <h3>- ShellHacks Team</h3>
                  </Card>
                ))}
              </List>
              <List>
                {events.map((card, i) => (
                  <Card key={i}><ul>
                    <h2>{card.title}</h2>
                    <br/>
                    <li>⏱️ Start: {moment(card.startTime).format("LLLL")}</li>
                    <li>⏱️ End: {moment(card.endTime).format("LLLL")}</li>
                    </ul>
                  </Card>
                ))}
              </List>
            </div>
          </div>
        </div>
      </AnimatedWaves>
    </div>
  );
};

export default Live;
