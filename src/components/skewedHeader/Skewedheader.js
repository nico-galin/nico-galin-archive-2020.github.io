import React from 'react';
import { ButtonToolbar } from '../buttonToolbar/ButtonToolbar';
import styles from './SkewedHeader.module.scss';
import Icon from '@material-ui/core/Icon';

export function SkewedHeader(props) {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
    </div>
  );
}
