import React from 'react';
import styles from './Tile.module.scss';

export function Tile(props) {
  let img;
  if (props.type === "image" || props.type === "content") {
    img = <img 
      src={require("./../../res/".concat(props.image))} 
      className={`${styles.image} ${props.type === "content" ? styles.image_margins : null}`} 
      alt={props.image}
    />
  }
  return (
    <a href={props.externalUrl} target="_blank" rel="noopener noreferrer" className={`${styles.container} ${props.type === "image" ? styles.container_image : null} ${props.type === "heading" ? styles.container_heading : null} ${props.type === "content" ? styles.container_content : null}`}>
        <div className={styles.upperContent}>
          {img}
          { props.type !== "image" ?
            <div>
              {props.type === "heading" ?
                <h2>{props.title}</h2>
              :
                <div className={`${styles.content} ${props.type === "heading" ? styles.heading : null}`}>
                  <h2>{props.title}</h2>
                  <b><p className={styles.subText}>{props.subTitle}</p></b>
                  <p className={styles.subText}>{props.description}</p>
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
