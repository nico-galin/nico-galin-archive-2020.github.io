import React from 'react';
import { ButtonToolbar } from '../buttonToolbar/ButtonToolbar';
import styles from './Tile.module.scss';
import Icon from '@material-ui/core/Icon';

export function Tile(props) {
  let img;
  if (props.type == "image" || props.type == "content") {
    img = <img 
      src={require("./../../res/".concat(props.image))} 
      className={`${styles.image} ${props.type== "content" ? styles.image_margins : null}`} 
      alt={props.image}
      width={props.type == "image" ? 200 : 100}
      height={props.type == "image" ? 200 : 100}
    />
  }
  return (
    <a href={props.externalUrl} target="_blank" className={`${styles.container} ${props.type == "image" ? styles.container_image : null} ${props.type == "heading" ? styles.container_heading : null} ${props.type == "content" ? styles.container_content : null}`}>
        <div className={styles.upperContent}>
          {img}
          { props.type != "image" ?
            <div>
              {props.type == "heading" ?
                <h2>{props.title}</h2>
              :
                <div className={`${styles.content} ${props.type == "heading" ? styles.heading : null}`}>
                  <h2>{props.title}</h2>
                  <b><a className={styles.subText}>{props.subTitle}</a></b>
                  <a className={styles.subText}>{props.description}</a>
                </div>
              }
            </div>
          : null }
        </div>
        <div className={styles.underContent}>
          <b>{props.underContent}</b>
        </div>
    </a>
  );
}
