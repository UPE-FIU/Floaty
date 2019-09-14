import React, { Component } from "react";
import { Card, AnimatedWaves, liveSchedule } from "./components";
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
              <div className="devpost-tables-container">
                <div className="devpost">
                <a href="https://devpost.com/">
                  <img src="https://marketing-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-a0cd0d3c3681a858b200141ed18a9bf9.svg"/></a>
                </div>
                <a href="#"><h2>Tables</h2></a>
              </div>
              <div className="mlh-workshops">
                <div >
                  <a href="https://hardware.mlh.io/">
                    <img className="mlh-hardware"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Major_League_Hacking_logo.svg/375px-Major_League_Hacking_logo.svg.png"/>
                  </a>
                </div>
                <a href="#"><h2>Workshop Stream</h2></a>
              </div>
              <div className="socials">
  
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
                <div>Timer goes here</div>
                <div>Current time here</div>
              </div>
              <div className="schedule-and-announcements">
                <div className="anouncements-container">
                  <h2>Announcements</h2>
                  <div className="announcement-list">
                  {liveSchedule.map((card, i) => {
                      let props = {
                        title: card.title,
                        description: card.description,
                        styleClassName: "live-card",
                        activeClassName: "active-live-card",
                        descStyle: "active-live-card card-content p",
                        i: i
                      };
                      return <Card key={i} {...props} />;
                    })}
                  </div>
                </div>
                <div className="schedule-container">
                  <h2>Schedule</h2>
                  <div className="live-schedule">
                    {liveSchedule.map((card, i) => {
                      let props = {
                        title: card.title,
                        description: card.description,
                        styleClassName: "live-card",
                        activeClassName: "active-live-card",
                        descStyle: "active-live-card card-content p",
                        i: i
                      };
                      return <Card key={i} {...props} />;
                    })}
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
