import React, { Component } from "react";
import Card from "../card";

class Events extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
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
        )
    }
}
