import React from "react";
import Card from "../components/Card";

const Home = ({
  users,
  searchValue,
  onChangeSearchInput,
  addToCart,
  addToFavorite,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `search by query: ${searchValue}` : "All users"}</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {users
          .filter(
            (x) =>
              x.name && x.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((x) => (
            <Card
              key={x.id}
              user={x}
              addToFavorite={addToFavorite}
              addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
