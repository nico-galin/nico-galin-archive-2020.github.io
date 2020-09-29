import React from 'react';
import styles from './ButtonToolbar.module.scss';

export function ButtonToolbar(props) {
  const buttons = [];
  for (let [index, val] of props.items.entries()) {
    buttons.push(
      <div href="#" key={index} className={`${styles.gradientPrimary} ${styles.button}`}>
          <b>{val}</b>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {buttons}
    </div>
  );
}
