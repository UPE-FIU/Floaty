import React, { Component } from "react";
import { AnimatedWaves } from '../../components'
import { Card } from './components/card'
import liveSchedule from '../../config/data/liveSchedule'
import './styles.css'
import { black } from "ansi-colors";
class Live extends Component {

    render() {
        return (<div>
            <AnimatedWaves>
                <div className="live-container">

                    <div className="messages-container">
                        <div>
                            <img className="main-section-details-logo" alt="ShellHacks Wordmark" src={require("./assets/logo.svg")} />
                            <h1>Live Page</h1>
                            <h2>Live message array goes here</h2>
                            {/* <LiveMessage/> */}

                        </div>
                        <div className='music-player-section'>
                        {/* <iframe src="https://open.spotify.com/embed/playlist/2R0OPkOjSI3AzpnC0VCbs5" width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                        <iframe width="400" height="200" src="https://www.youtube.com/embed/videoseries?list=PLhjbtbG8AMAR-wzrlksDY6eF1qEg-Cae0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="schedule-continer">
                        <h2>Schedule:</h2>
                        <div className='live-schedule'>
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
            </AnimatedWaves>
        </div>
        );
    }
}

export default Live;
