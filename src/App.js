import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [sneakers, setSneakers] = React.useState([]);

  React.useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/Items", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSneakers(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
          items={cartSneakers}
          onClose={() => {
            setCardOpened(false);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCardOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.map((x) => (
            <Card
              key={x.imgUrl}
              description={x.description}
              imgUrl={x.imgUrl}
              price={x.price}
              onFavorite={() => {
                console.log("favorite");
              }}
              onPlus={() => {
                setCartSneakers((prev) => [...prev, x]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
