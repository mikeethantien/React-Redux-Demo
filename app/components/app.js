import React, { Component } from "react";
import { connect } from "react-redux";

import List from "./list";
import Balance from "./balance";

/*
 @class: App
 @description: The entry point of the application.
 */
class App extends Component {
  render() {
    return (
      <div className="main">
        <h2>My Inventory</h2>
        <List dispatch={this.props.dispatch} items={this.props.items}/>
        <Balance items={this.props.items}/>
      </div>
    )
  }
}

//Map the state to props
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
