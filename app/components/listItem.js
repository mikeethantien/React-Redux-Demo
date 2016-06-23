import React, { Component } from "react";

import Actions from "../redux/actions"

/*
 @class: ListItem
 @description: Renders out each row in the inventory table.
 */
class ListItem extends Component {

  handleAdd() {
    //Increment the id of the currently selected row, and use it as the new id for the new row that will be added.
    //There's a method inside the reducer to check the uniqueness of the id. If the id has been used, it will add the same row again.
    this.props.dispatch(Actions.add(this.props.item.id + 1));
  }

  handleDelete() {
    this.props.dispatch(Actions.delete(this.props.item.id));
  }

  handleValueChange(e) {
    this.props.dispatch(Actions.edit(this.props.item.id, e.target.name, e.target.value));
    this.handleAdd();
  }

  render() {
    return (
      <tr>
        <td className="item">
          <input name="name" className="form-control" value={this.props.item.name} onChange={this.handleValueChange.bind(this)}></input>
        </td>
        <td className="qty">
          <input name="qty" type="number" min="0" className="form-control" value={this.props.item.qty} onChange={this.handleValueChange.bind(this)}></input>
        </td>
        <td className="price">
          <span className="currency">$</span>
          <input name="price" type="number" min="0" step="0.01" className="form-control" value={this.props.item.price} onChange={this.handleValueChange.bind(this)}></input>
        </td>
        <td className="total">
          <span className="currency">$</span>
          <input className="form-control" disabled="disabled" value={(Number(this.props.item.qty) * Number(this.props.item.price)).toFixed(2)}></input>
        </td>
        <td className="deleteBtn">
          <button className="btn btn-danger btn-delete" onClick={this.handleDelete.bind(this)}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span><
          /button>
        </td>
      </tr>
    )
  }
}

export default ListItem;
