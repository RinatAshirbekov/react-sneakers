import React from "react";
import Card from "../components/Card";

const Favorites = ({ users, addToFavorite, addToCart }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {users.map((x) => (
          <Card
            key={x.id}
            user={x}
            favorited={true}
            addToFavorite={addToFavorite}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
