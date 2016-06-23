import React, { Component } from "react";

/*
 @class: Summary
 @description: Renders the balance of the inventory.
 */
class Balance extends Component {
  getTotal() {
    var items = this.props.items;

    return items.reduce((currentTotal, item) => {
      return currentTotal + (item.qty * item.price);
    }, 0);
  }

  render() {
    var total = this.getTotal();

    return (
      <div className="summary">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="right">${total.toFixed(2)}</span>
            Subtotal
          </li>
          <li className="list-group-item">
            <span className="right">${(total * 0.05).toFixed(2)}</span>
            Tax (5%)
          </li>
          <li className="list-group-item">
            <span className="right">${(total * 1.05).toFixed(2)}</span>
            Total
          </li>
        </ul>
      </div>
    )
  }
}

export default Balance;
