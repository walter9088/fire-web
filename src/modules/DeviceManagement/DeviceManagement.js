import React from 'react';
import styles from './DeviceManagement.module.css';

function DeviceManagement() {
  return (
    <div className={styles.deviceManagementContainer}>
      <h2>Device Management</h2>
      <ul>
        <li>Device 1</li>
        <li>Device 2</li>
        <li>Device 3</li>
      </ul>
    </div>
  );
}

export default DeviceManagement;