import React, { Component } from "react";
import Actions from "../redux/actions"

class ListItem extends Component {

  getId() {
    return state.items.reduce((currentMax, item) => {
      return Math.max(item.id, currentMax)
    }, -1) + 1;
  }

  handleAdd() {
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
        <td className="item"><input name="name" className="form-control" value={this.props.item.name} onChange={this.handleValueChange.bind(this)}></input></td>
        <td className="qty"><input name="qty" type="number" className="form-control" value={this.props.item.qty} onChange={this.handleValueChange.bind(this)}></input></td>
        <td className="price"><span className="currency">$</span><input name="price" type="number" className="form-control" value={this.props.item.price} onChange={this.handleValueChange.bind(this)}></input></td>
        <td className="total"><span className="currency">$</span><input className="form-control" disabled="disabled" value={(Number(this.props.item.qty) * Number(this.props.item.price)).toFixed(2)}></input></td>
        <td className="deleteBtn"><button className="btn btn-danger btn-delete" onClick={this.handleDelete.bind(this)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
      </tr>
    )
  }
}

export default ListItem;
