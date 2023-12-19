import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import styles from './App.module.css'; // Import the CSS module

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
