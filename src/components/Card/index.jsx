import React from "react";
import styles from "./Card.module.scss";
function Card({ user, addToCart, addToFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  return (
    <div className={styles.card}>
      <div
        className={styles.favorite}
        onClick={() => {
          addToFavorite(user);
          setIsFavorite(!isFavorite);
        }}
      >
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt=""
        />
      </div>
      <img
        width={133}
        height={112}
        src={user.avatar}
        alt={user.name}
        style={{ borderRadius: "20px" }}
      />
      <h5>{user.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>Date: {user.date} </b>
        </div>
        <img
          className={styles.plus}
          onClick={() => {
            addToCart(user);
            setIsAdded(!isAdded);
          }}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
