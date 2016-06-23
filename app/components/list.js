import React, { Component } from "react";
import Actions from "../redux/actions";

import ListItem from "./listItem"


/*
 @class: List
 @description: Renders out the table which displays the inventory.
 */
class List extends Component {
  getEntries() {
    return this.props.items.map((item) => {
      return (
        <ListItem item={item} key={item.id} dispatch={this.props.dispatch}/>
      )
    });
  }

  render() {
    var entries = this.getEntries();
    return (
      <div className="list-container">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entries}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List;
