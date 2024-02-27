import React from "react";
import styles from "./App.module.scss";
import Header from "components/header";
import ChannelsSideBar from "components/channels";
import Groups from "components/groups";
import Chatbox from "components/chatbox";

const App = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.header}><Header /></div>
      <div className={styles.groups}><Groups /></div>
      <div className={styles.channels}>
        <ChannelsSideBar>
          <Chatbox />
        </ChannelsSideBar>
      </div>
    </div>
  );
};

export default App;
