import React from "react";
import styles from "../../App.module.scss";
import Header from "components/header";
import ChannelsSideBar from "components/channels";
import Groups from "components/groups";
import Chatbox from "components/chatbox";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slices/users';

const Dashboard = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.parent}>
      {user.given_name === '' &&
        <Navigate to="/" replace={true} />
      ||
      <>
        <div className={styles.header}><Header /></div>
          <div className={styles.groups}><Groups /></div>
          <div className={styles.channels}>
            <ChannelsSideBar>
              <Chatbox />
            </ChannelsSideBar>
          </div>
      </>
    }
    </div>
  );
};

export default Dashboard;
