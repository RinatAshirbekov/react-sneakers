function CardItem({ item }) {
  console.log(item);
  return (
    <div className="cartItem">
      <div
        style={{ backgroundImage: `url("${item.imgUrl}")` }}
        className="cartItemImg"
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">{item.description}</p>
        <b>{item.price} руб.</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
}

export default CardItem;
