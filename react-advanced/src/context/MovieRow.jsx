import React, { useContext, useState } from "react";
import CartContext from "./cartContext";
import UserContext from "./userContext";

function MovieRow(props) {
  const [usernameValue, setUsername] = useState("");
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const user = userContext.currentUser;
  const handleLoggedIn = userContext.onLoggedIn;
  return (
    <div>
      <span>Function context: {user.name ? user.name : ""}</span>

      <input
        value={usernameValue}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => handleLoggedIn(usernameValue)}>Login</button>
    </div>
  );
}

export default MovieRow;
