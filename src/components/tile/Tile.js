import React from 'react';
import { ButtonToolbar } from '../buttonToolbar/ButtonToolbar';
import styles from './Tile.module.scss';
import Icon from '@material-ui/core/Icon';

export function Tile(props) {
  let img;
  if (props.type == "image") {
    img = <img 
      src={require("./../../res/".concat(props.image))} 
      className={styles.image} 
      alt={props.image}
      width={200}
      height={200}
    />
  }
  return (
    <a href={props.externalUrl} target="_blank" className={`${styles.container} ${props.type == "image" ? styles.container_image : null} ${props.type == "heading" ? styles.container_heading : null}`}>
        {img}
        { props.type != "image" ?
          <div className={`${styles.content} ${props.type == "heading" ? styles.heading : null}`}>
            <h2>{props.title}</h2>
            <a className={styles.desc}>{props.description}</a>
          </div>
        : null }
        <div className={styles.underContent}>
          <b>{props.underContent}</b>
        </div>
    </a>
  );
}
