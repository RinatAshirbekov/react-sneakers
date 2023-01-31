function CardItem({ item, remove }) {
  // console.log(item);
  // console.log(remove);
  return (
    <div className="cartItem">
      <div
        style={{ backgroundImage: `url("${item.avatar}")` }}
        className="cartItemImg"
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">{item.name}</p>
        <b>Date: {item.createdAt} </b>
      </div>
      <img
        onClick={() => {
          remove(item.id);
        }}
        className="removeBtn"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </div>
  );
}

export default CardItem;
