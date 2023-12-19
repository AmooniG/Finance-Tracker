import React, { useState, useEffect } from 'react';
import styles from './RecentTransactions.module.css'; // Assume you have styling here

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // This is where you would fetch data from your backend
    fetch('/api/transactions/recent') // Adjust the URL to match your API endpoint
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <div className={styles.recentTransactions}>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date}: {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
