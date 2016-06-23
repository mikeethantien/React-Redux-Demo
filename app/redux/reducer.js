function isIdUnique(state, id) {
  var items = state.items;
  for(var key in items) {
    if(items[key] && items[key].id === id) {
      return false;
    }
  }

  return true;
}

var reducer = function(state, action) {
  switch(action.type) {
    case "ADD":
      //Add a new item to the bottom of the list each time.
      //Only do this when the id of the newly added item has not been used yet.
      if(isIdUnique(state, action.id)) {
        return Object.assign({}, state, {
          items: state.items.concat({
            //New object
            name: "",
            qty: 0,
            price: 0,
            id: action.id
          })
        });
      }

      else {
        return state;
      }

      break;

    case "EDIT":
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if(item.id === action.id)
          {
            //Create a temp obj to store the changes
            var obj = {};
            obj[action.propName] = action.value;

            return Object.assign({}, item, obj);
          }

          else {
            return item;
          }
        })
      });
      break;

    case "DELETE":
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return (item.id === action.id) ? false : true;
        })
      });
      break;

    default:
      //Nothing has been changed in the default case.
      return state;
  }
}

export default reducer;
