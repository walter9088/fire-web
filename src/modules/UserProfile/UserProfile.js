import React from 'react';
import styles from './UserProfile.module.css';

function UserProfile() {
  return (
    <div className={styles.userProfileContainer}>
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
    </div>
  );
}

export default UserProfile;