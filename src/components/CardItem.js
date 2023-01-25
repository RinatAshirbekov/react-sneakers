function CardItem() {
  return (
    <div className="cartItem">
      <div
        style={{ backgroundImage: 'url("/img/sneakers/1.jpg")' }}
        className="cartItemImg"
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
        <b>12 999 руб.</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
}

export default CardItem;
