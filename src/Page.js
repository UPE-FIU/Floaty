import React, { Component } from "react";
import AnimatedWaves from "./components/AnimatedWaves";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkContiner from "./components/LinkGroup";
import {CurrentTime, CountdownTimer} from "./components/Timer"
import data from "./dummy";
import data2 from "./dummy2";
import List from "./components/List";
import Card from "./components/Card";
import styles from "./scss/Page.module.scss"


class Live extends Component {
  render() {
    return (
        <AnimatedWaves>
          <div className={styles.liveContainer}>
            <div className={styles.leftContainer}>
              <img
                className="main-section-details-logo"
                alt="ShellHacks Wordmark"
                src={require("./assets/shellhacks.svg")}
              />
              <LinkContiner
                firstLinkDest="https://devpost.com/"
                imgSrc="https://marketing-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-a0cd0d3c3681a858b200141ed18a9bf9.svg"
                secondLinkName="Tables"
                secondLinkDest="#"
              />
              <LinkContiner
                link="https://hardware.mlh.io/"
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Major_League_Hacking_logo.svg/375px-Major_League_Hacking_logo.svg.png"
                secondLinkName="Workshop Stream"
                secondLinkDest="#"
              />
              <div className={styles.socialMediaContainer}>
                <a className={styles.icon} href="https://discordapp.com/invite/upefiu">
                  <FontAwesomeIcon icon={faDiscord} size="4x" />
                </a>
                <a className={styles.icon} href="https://www.instagram.com/upefiu/">
                  <FontAwesomeIcon icon={faInstagram} size="4x" />
                </a>
                <a className={styles.icon} href="https://www.facebook.com/upefiu">
                  <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
                </a>
                <a className={styles.icon} href="https://twitter.com/upefiu">
                  <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
                </a>
                <a
                  className={styles.icon}
                  href="https://www.linkedin.com/company/upe-fiu/"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="4x" />
                </a>
              </div>
              <div className={styles.musicPlayerSection}><iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/hHW1oY26kxQ" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                title = "music livestream">
                </iframe>
              </div>
            </div>
            <div className={styles.rightContainer}>
               <div className={styles.timerContainer}>
                  <CountdownTimer/>
                <div><CurrentTime/></div>
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
                {/*
                <div className="anouncements-container">
                  <h2>Announcements</h2>
                  <div className="announcement-list">
                    <AnnouncementList data={[{title: "Snacks Update!",
                                    body: "Snacks will be coming around in the next 10 minutes",
                                    author: "ShellHacks Team"}]}/>
                  </div>
                </div>
                <div className="schedule-container">
                  <h2>Schedule</h2>
                  <div className="live-schedule">
                  <ScheduleList data={[{title: "HMTL Workshop", 
                                    startTime: "Friday 1:00PM", 
                                    location: "PG6", 
                                    organizer: "UPE", 
                                    description: "Learn HTML from Jehf Doe"}]}/>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </AnimatedWaves>
    );
  }
}

export default Live;
