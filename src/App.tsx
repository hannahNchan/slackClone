import React from "react";
import styles from "./App.module.scss";
import Header from "components/header";
import ChannelsSideBar from "components/channels";

const App = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.header}><Header /></div>
      <div className={styles.groups}></div>
      <div className={styles.channels}><ChannelsSideBar /></div>
      <div className={styles.chatzone}></div>
    </div>
  );
};

export default App;
