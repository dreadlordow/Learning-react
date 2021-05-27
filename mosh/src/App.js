import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Movies from "./components/Movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import RegisterForm from "./components/RegisterForm";
import { getCurrentUser } from "./services/authServices";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    console.log("mounted");
    const user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
