import React, { Component } from "react";
import { Card, AnimatedWaves, liveSchedule } from "./components";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScheduleList from "./components/ScheduleList"
import AnnouncementList from "./components/AnnouncementList"
import LinkContiner from "./components/linkContatiner";
import countdownTimer from "./components/timer"
import "./styles.css";

class Live extends Component {
  render() {
    return (
      <div>
        <AnimatedWaves>
          <div className="live-container">
            <div className="left-container">
              <img
                className="main-section-details-logo"
                alt="ShellHacks Wordmark"
                src={require("./assets/shellhacks.svg")}
              />
              <LinkContiner 
                firstLinkDest="https://devpost.com/" 
                imgSrc="https://marketing-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-a0cd0d3c3681a858b200141ed18a9bf9.svg"
                secondLinkName= "Tables"
                secondLinkDest="#"
              />
              <LinkContiner 
                link="https://hardware.mlh.io/" 
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Major_League_Hacking_logo.svg/375px-Major_League_Hacking_logo.svg.png"
                secondLinkName= "Workshop Stream"
                secondLinkDest="#"
              />
              <div className="social-media-container">
                <a href="https://discordapp.com/invite/upefiu">
                  <FontAwesomeIcon icon={faDiscord} size="4x" />
                </a>
                <a href="https://www.instagram.com/upefiu/">
                  <FontAwesomeIcon icon={faInstagram} size="4x" />
                </a>
                <a href="https://www.facebook.com/upefiu">
                  <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
                </a>
                <a href="https://twitter.com/upefiu">
                  <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
                </a>
                <a href="https://www.linkedin.com/company/upe-fiu/">
                  <FontAwesomeIcon icon={faLinkedin} size="4x" />
                </a>
              </div>
              <div className="music-player-section">
                {/* <iframe src="https://open.spotify.com/embed/playlist/2R0OPkOjSI3AzpnC0VCbs5" width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                <iframe
                  title="YouTube Stream"
                  width="400"
                  height="200"
                  src="https://www.youtube.com/embed/videoseries?list=PLhjbtbG8AMAR-wzrlksDY6eF1qEg-Cae0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="right-container">
              <div className="timer-container">
                <div>
                  <countdownTimer/>
                </div>
                <div>Current time here</div>
              </div>
              <div className="schedule-and-announcements">
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
              </div>
            </div>
          </div>
        </AnimatedWaves>
      </div>
    );
  }
}

export default Live;
