import React, { Component } from "react";
import List from "./list";
import Summary from "./summary";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h2>My Inventory</h2>
        <List dispatch={this.props.dispatch} items={this.props.items}/>
        <Summary items={this.props.items}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
