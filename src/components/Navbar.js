import React from 'react';
import styles from '../App.module.css'; // Assuming you're using the same CSS file

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Finance Tracker</h1>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#budgeting">Budgeting</a></li>
        <li><a href="#analytics">Analytics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
