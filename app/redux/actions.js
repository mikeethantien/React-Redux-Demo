var actions = {
  add: function(id) {
    return {
      type: "ADD",
      id: id
    }
  },
  edit: function(id, propName, value) {
    return {
      type: "EDIT",
      id: id,
      propName: propName,
      value: value
    }
  },
  delete: function(id) {
    return {
      type: "DELETE",
      id: id
    }
  }
}

export default actions;
