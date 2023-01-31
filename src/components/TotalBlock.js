const TotalBlock = () => {
  return (
    <div className="cartTotalBlock">
      <ul>
        <li>
          <span>Итого</span>
          <div></div>
          <b>21 498 rub.</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб. </b>
        </li>
      </ul>
      <button className="greenButton">
        Оформить заказ
        <img src="/img/arrow.svg" alt="arrow" style={{ right: "30px" }} />
      </button>
    </div>
  );
};
export default TotalBlock;
