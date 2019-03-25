import React from "react";
import Header from "./Header";
import About from "./About";
import Feature from "./Feature";
import Tours from "./Tours";
import Story from "./Story";
import Booking from "./Booking";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Popup from "./Popup";

class App extends React.Component {
  state = { show: false };

  render() {
    console.log(this.state.show);
    return (
      <div>
        <BrowserRouter>
          <Route exact path="" component={Navigation} />
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={About} />
          <Route exact path="/" component={Feature} />
          <Route
            exact
            path="/"
            render={props => (
              <Tours
                {...props}
                onClose={() => this.setState({ show: !this.state.show })}
              />
            )}
          />
          <Route exact path="/" component={Story} />
          <Route exact path="/" component={Booking} />
          <Route exact path="/" component={Footer} />
          <Route
            exact
            path="/"
            render={props => (
              <Popup
                {...props}
                show={this.state.show}
                onClose={() => this.setState({ show: !this.state.show })}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
