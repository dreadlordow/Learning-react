import logo from "./logo.svg";
import "./App.css";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import React, { Component } from "react";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";

class App extends Component {
  state = { currentUser: { name: null } };

  handleLoggedIn = (username) => {
    console.log("executed");
    const user = { name: username };
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <CartContext.Provider value={{cart: []}}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
