import React, { Component } from "react";
import Movies from "./components/Movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import MovieForm from './components/MovieForm';
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path='/register' component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}
export default App;
