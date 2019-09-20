import React, { useState, useEffect } from "react";
import AnimatedWaves from "../components/AnimatedWaves";
import Notification from "react-notifications-component";
import { CurrentTime, CountdownTimer } from "../components/Timer";
import data from "./dummy";
import data2 from "./dummy2";
import List from "../components/List";
import Card from "../components/Card";
import MLHBadge from "../components/MLHBadge";
import Organizers from "../components/Organizers";
import Demo from "../components/Demo";
import Music from "../components/Music";
import SocialMedia from "../components/SocialMedia";
import styles from "./Page.module.scss";

const Live = () => {
  const [events, setEvents] = useState({});
  const [announcements, setAnnouncements] = useState({});
  const [isErrored, setIsErrored] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <MLHBadge />
      <AnimatedWaves>
        <div className={styles.pageContainer}>
          <div className={styles.leftContainer}>
            <Organizers />
            <Demo />
            <SocialMedia />
            {/* <Music /> */}
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.timerContainer}>
              <CountdownTimer />
              <div>
                <CurrentTime />
              </div>
            </div>
            <div className={styles.scheduleAndAnnouncements}>
              <List>
                {data.map((card, i) => (
                  <Card key={i}>
                    <h2>{card.title}</h2>
                    <p>{card.body}</p>
                    <p>{card.category}</p>
                    <p>{card.sendTime}</p>
                    <p>- ShellHacks Team</p>
                  </Card>
                ))}
              </List>
              <List>
                {data2.map((card, i) => (
                  <Card key={i}>
                    <h2>{card.title}</h2>
                    <h3>{card.startTime}</h3>
                    <h3>{card.presenters}</h3>
                    <p>{card.description}</p>
                  </Card>
                ))}
              </List>
            </div>
          </div>
          <div className={styles.sponsors}>
            <h1>sponsors</h1>
          </div>
        </div>
      </AnimatedWaves>
    </div>
  );
};

export default Live;
