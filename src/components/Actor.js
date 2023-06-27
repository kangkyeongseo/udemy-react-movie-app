import React from "react";
import Styles from "styles/Actor.module.css";

const Actor = ({ img, name, character }) => {
  return (
    <li className={Styles.actor}>
      {img ? (
        <img src={img} alt="actor" className={Styles.actorImg} />
      ) : (
        <div className={Styles.actorImgReplace}></div>
      )}

      <div className={Styles.actorContent}>
        <span className={Styles.actorName}>{name}</span>
        <span className={Styles.actorCharacter}>{character}</span>
      </div>
    </li>
  );
};

export default Actor;
