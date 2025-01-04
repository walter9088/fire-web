import React from 'react';
import styles from './Input.module.css';

function Input({ label, type, value, onChange }) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default Input;