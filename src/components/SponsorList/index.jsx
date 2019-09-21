import React, { useState, useEffect } from "react"
import styles from "./Sponsors.module.scss"


const SponsorList = () => {
    const [image, setImage] = useState("")
    let i = 0;
    let pick = imagesArray[i]


    setInterval(() => {
        console.log(i)
        ++i
        pick = imagesArray[(i) % imagesArray.length]

    }, 2000);


    return (
        <div className={styles.container}>
            <img className={styles.sponsorImage} src={require(`../../assets/sponsors/${pick}`)} />
        </div>
    )
}


export default SponsorList;


let imagesArray = [
    "Assurant.svg",
    "Autonation.svg",
    "Balsamiq.svg",
    "Carnival.svg",
    "Chevron.svg",
    "Citrix.svg",
    "Cloudflare.svg",
    "CNB.svg",
    "Dell.svg",
    "DigitalOcean.svg",
    "EA.svg",
    "Farlogix.svg",
    "FCA.svg",
    "FIUCE.svg",
    "FIUSCIS.svg",
    "Github.svg",
    "Google.svg",
    "Heroku.svg",
    "Jetbrains.svg",
    "JMPC.svg",
    "Lyft.svg",
    "Macys.svg",
    "Matrix.svg",
    "Microsoft.svg",
    "Mitre.svg",
    "MLH.svg",
    "MuscleMilk.svg",
    "Nike.svg",
    "Origin.svg",
    "Panthers.svg",
    "Pepsi.svg",
    "RCCL.svg",
    "Redfin.svg",
    "Ripplematch.svg",
    "Rockstar.svg",
    "sketch.svg",
    "stateFarm.svg",
    "stickermule.svg",
    "Taxfyle.svg",
    "Taylor.svg",
    "Twilio.svg",
    "Twitter.svg",
    "Wolfram.svg",
    "Xbox.svg"
]