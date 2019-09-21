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
//import Notify from "../components/Notification";
import styles from "./Page.module.scss";
import Link from "../components/Link"

import sockets from "../services/sockets";
import services from "../services/api";
import Moment from "moment";

const Live = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const getEvs = async () => {
    const data = await services.getEvents();
    setEvents(data);
  };

  const getAnns = async () => {
    const data = await services.getAnnoucements();
    setAnnouncements(data);
  };

  useEffect(() => {
    getAnns();
    getEvs();
  }, []);

  sockets.on("announcement", data => {
    console.log(data);
    getAnns();
    store.addNotification({
      title: "New Announcement!",
      message: "Check the annoucements list...",
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  });

  sockets.on("schedule_updated", () => {
    console.log("refresh page");
    getEvs();
    store.addNotification({
      title: "New Event Added!",
      message: "check the events list...",
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  });
  console.log(announcements)
  return (
    <div>
      <MLHBadge />
      <AnimatedWaves>
        {/* <div className={styles.message}>
          <h1>Sorry buddy, We don't do mobile...</h1>
        </div> */}
        <div className={styles.pageContainer}>
          <div className={styles.leftContainer}>
            <Organizers />
            <Demo />
            <SocialMedia />
            <div style={{display:"block",width:"100%",textAlign:"center"}}>
              <div className={styles.floorPlans}>
              <Link to="https://drive.google.com/file/d/1wT0cib7JF-HwSbBZj9XIt6f6u0WAziz8/view?usp=sharing"><h3>Floor Plan: First Floor</h3></Link>
              <Link to="https://drive.google.com/file/d/1au-NUFuqrd3FnhSfnp-8kDOcqwyygvM8/view?usp=sharing"><h3>Floor Plan: Second Floor</h3></Link>
              </div>
              <div className={styles.floorPlans}>
                <h3>Wifi Name: ShellHacks2019</h3>
                <h3>Wifi Password: Shell1000</h3>
              </div>
            </div>
            {/* <Music /> */}
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.timerContainer}>
              <Timer />
            </div>
            <div className={styles.scheduleAndAnnouncements}>
              <List classname={styles.announcements}>
                {announcements.map((card, i) => (
                  <Card key={i}>
                    <h2>{card.title}</h2>
                    <br/>
                    <h3>{card.body}</h3>
                    <h3>{card.category}</h3>
                    <h3>{card.sendTime}</h3>
                    <br/>
                    <h3>- ShellHacks Team</h3>
                  </Card>
                ))}
              </List>
              <List>
                {events.map((card, i) => (
                  <Card key={i}><ul>
                    <h2>{card.title}</h2>
                    <br />
                    {/* eslint-disable-next-line */}
                    <li><span role="img">⏱️</span> Start: {Moment(card.startTime).format("LLLL")}</li>
                    {/* eslint-disable-next-line */}
                    <li><span role="img">⏱️</span> End: {Moment(card.endTime).format("LLLL")}</li>
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
