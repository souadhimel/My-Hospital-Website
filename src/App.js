import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Doctors from "./components/Doctors/Doctors";
import Book from "./components/Book/Book";
import Review from "./components/Review/Review";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Details from "./components/Details/Details";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRout.e";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/book">
              <Book></Book>
            </Route>
            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/details/:id">
              <Details></Details>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
