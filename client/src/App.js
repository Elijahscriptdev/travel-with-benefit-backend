import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/aboutpage/AboutPage";
import Contact from "./components/contact/Contact";
import BookingInfo from "./components/booking/BookingInfo";
import BusListings from "./components/booking/BusListings";
import Terms from "./components/terms/Terms";
import Destinations from "./components/booking/Destinations";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./pages/routing/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import Alert from "./components/alert/Alert";
import { loadUser } from "./redux/actions/auth";
import Dashboard from "./pages/dashboard/Dashboard";
import ConfirmBooking from "./components/booking/ConfirmBooking";
import Payment from "./components/booking/Payment";

function App() {
  // always make sure the user is authenticated if token in the localstorage is valid
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Route path='/' exact component={Homepage} />
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/payment-status' component={Payment} />
          <Route path='/booking-info' component={BookingInfo} />
          <Route path='/confirm-your-bookings' component={ConfirmBooking} />
          <Route path='/bus/listings' component={BusListings} />
          <Route path='/about-us' exact component={AboutPage} />
          <Route path='/terms-and-conditions' exact component={Terms} />
          <Route path='/all-destinations' exact component={Destinations} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;


// "scripts": {
//   "dev": "react-scripts start",
//   "start": "serve -s build",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject",
//   "heroku-postbuild": "npm run build"
// },