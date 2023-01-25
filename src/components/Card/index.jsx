import styles from "./Card.module.scss";
console.log(styles);
function Card(props) {
  const onClickButton = (a, b, c) => {
    console.log(a.target);
    console.log(b + c);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
      <h5>{props.description}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} rub.</b>
        </div>
        <button className="button" onClick={(a) => onClickButton(a, 2, 5)}>
          <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
