import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
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
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/1.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/2.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/3.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/4.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/5.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/6.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/7.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/8.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/9.jpg"
          />
          <Card
            description="i love yoo"
            price={200}
            imgPath="/img/sneakers/10.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
