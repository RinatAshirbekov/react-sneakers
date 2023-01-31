import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import React from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [cardOpened, setCartOpened] = React.useState(false);
  const [cartUsers, setCartUsers] = React.useState([]);
  // const [favoriteUsers, setFavoriteUsers] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/items")
      .then((res) => {
        setUsers(res.data);
      });
    axios
      .get("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/cart")
      .then((res) => {
        setCartUsers(res.data);
      });
  }, []);

  const removeCartUser = async (id) => {
    try {
      const response = await axios.delete(
        "https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/cart/" + id
      );
      console.log(response);
      setCartUsers((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
      alert("error wher removed user from cart");
    }
  };

  const addToCart = (user) => {
    if (cartUsers.find((item) => item.id === user.id)) {
      axios
        .delete("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/cart/" + user.id)
        .then(() => {
          setCartUsers((prev) => prev.filter((item) => item.id !== user.id));
        })
        .catch((error) => {
          // console.log(error);
          alert("error when removing user");
        });
    } else {
      axios
        .post("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/cart", user)
        .then(() => {
          setCartUsers((prev) => [...prev, user]);
        })
        .catch((error) => {
          // console.log(error);
          alert("Error when added to cart");
        });
    }
  };

  const addToFavorite = (user) => {
    addToCart(user);
    console.log(user);
    // if (favoriteUsers.find((item) => item.id === user.id)) {
    //   axios.delete(
    //     "https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/favorites/" + user.id
    //   );
    //   setFavoriteUsers((prev) => prev.filter((item) => item.id !== user.id));
    // } else {
    //   axios.post("https://63d3bfdfc1ba499e54c7d4c9.mockapi.io/favorites", user);
    //   setFavoriteUsers((prev) => [...prev, user]);
    // }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
          users={cartUsers}
          removeCartItem={removeCartUser}
          onClose={() => {
            setCartOpened(false);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              users={users}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
            />
          }
        ></Route>
        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              users={cartUsers}
              addToCart={addToCart}
              addToFavorite={addToCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
