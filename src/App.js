import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const sneakers = [
    {
      description: "rinat",
      imgUrl: "/img/sneakers/1.jpg",
      price: 770,
    },
    {
      description: "azamat",
      imgUrl: "/img/sneakers/2.jpg",
      price: 230,
    },
    {
      description: "kanat",
      imgUrl: "/img/sneakers/3.jpg",
      price: 1540,
    },
    {
      description: "rustam",
      imgUrl: "/img/sneakers/4.jpg",
      price: 840,
    },
  ];
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
