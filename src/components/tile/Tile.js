import React from 'react';
import styles from './Tile.module.scss';

export function Tile(props) {
  let img;
  if (props.image && (props.type === "image" || props.type === "content" && window.innerWidth > 768)) {
    img = <img 
      src={require("./../../res/".concat(props.image))} 
      className={`${styles.image} ${props.type === "content" ? styles.image_margins : null}`} 
      alt={props.image}
      width={props.type === "content" ? 60 : null}
    />
  }
  return (
    <a href={props.externalUrl ? props.externalUrl : props.internalUrl} target={props.externalUrl ? "_blank" : ""} rel={props.externalUrl ? "noopener noreferrer" : ""} className={`${styles.container} ${props.type === "image" ? styles.container_image : null} ${props.type === "heading" ? styles.container_heading : null} ${props.type === "content" ? styles.container_content : null}`}>
        <div className={styles.upperContent}>
          {img}
          { props.type !== "image" ?
            <div>
              {props.type === "heading" ?
                <h3>{props.title}</h3>
              :
                <div className={`${styles.content} ${props.type === "heading" ? styles.heading : null}`}>
                  <h3>{props.title}</h3>
                  <b><p className={styles.subText}>{props.subTitle}</p></b>
                  { props.descriptions.map((desc, index) => (
                    <p className={styles.subText}>{desc}</p>
                  ))}
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
