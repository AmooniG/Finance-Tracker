import React from 'react';
import styles from '../App.module.css'; // Update the import path if necessary
import RecentTransactions from './RecentTransactions'; // Import the new component

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <RecentTransactions /> {/* Include the Recent Transactions component */}
      </div>
      <div className={styles.card}>
        <h2>Budget Overview</h2>
        {/* Budget overview component or content goes here */}
      </div>
      <div className={styles.card}>
        <h2>Financial Analytics</h2>
        {/* Financial analytics component or content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
