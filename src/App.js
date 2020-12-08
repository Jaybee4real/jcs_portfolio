import React, { Component } from "react";
import LandingPage from "./components/LandingPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    return (
      <div className={`app-container ${this.state.loading}`}>
        <div className={`loader ${this.state.loading ? "loading" : ""}`}>
          <span></span>
        </div>
        <LandingPage />
        <div className={`warning ${this.state.loading ? "" : "shown"}`}>
          <div className="text">
            Sorry, This Site Is Not Optimized For This Screen Yet
          </div>
        </div>
      </div>
    );
  }
}
