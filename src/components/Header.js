import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"/"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div>
        <div>
          <div>
            <p></p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
            <img src="/img/cart.svg" alt="cart" />
            <span>1205 rub.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to={`/favorites`}>
              <img src="/img/heart.svg" alt="heart" />
            </Link>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
