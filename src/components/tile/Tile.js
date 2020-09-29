import React from 'react';
import { ButtonToolbar } from '../buttonToolbar/ButtonToolbar';
import styles from './Tile.module.scss';
import Icon from '@material-ui/core/Icon';

export function Tile(props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <a className={styles.desc}>{props.description}</a>
        </div>
        <ButtonToolbar items={["more"]}  primary={0} 
            icons={[<Icon style={{color:'white'}}>share</Icon>]}
          />
      </div>
    </div>
  );
}
