function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="" />
      </div>
      <img width={133} height={112} src={props.imgPath} alt="Sneakers" />
      <h5>{props.description}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} rub.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;