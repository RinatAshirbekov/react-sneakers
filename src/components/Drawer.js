import CardItem from "./CardItem";
import TotalBlock from "./TotalBlock";

function Drawer({ users = [], onClose, removeCartItem }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {users.length > 0 ? (
          <>
            <div className="items flex">
              {users.map((user) => (
                <CardItem key={user.id} item={user} remove={removeCartItem} />
              ))}
            </div>
            <TotalBlock />
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              src="/img/empty-cart.jpg"
              alt="Empty Cart"
              className="mb-20"
              width={120}
              height={120}
            />
            <h2>Cart is empty</h2>
            <p className="opacity-6">Add a least one user</p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/back.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
