import React from "react";
import styles from "./Music.module.scss";
const Music = () => {
  return (
    <div className={styles.musicPlayerSection}>
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
  );
};

export default Music;
