import "babel-polyfill";

import expect from 'expect';
import reducer from '../app/redux/reducer';

describe('inventory reducer', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual({
        items: []
      }
    );
  });

  it('should handle ADD', () => {
    //Add the first item
    let action1 = {
      type: "ADD",
      id: 0
    };

    let state = reducer(undefined, action1);

    expect(state).toEqual({
        items: [{
          name: "",
          qty: 0,
          price: 0,
          id: 0
        }]
      }
    );

    //Add the second item
    let action2 = {
      type: "ADD",
      id: 1
    };

    state = reducer(state, action2);
    expect(reducer(state, action2)).toEqual({
        items: [
          {
            name: "",
            qty: 0,
            price: 0,
            id: 0
          },
          {
            name: "",
            qty: 0,
            price: 0,
            id: 1
          }
        ]
      }
    );
  });

  it('should handle EDIT', () => {
    //Add the first item
    let action1 = {
      type: "ADD",
      id: 0
    };

    //Add the first item
    let state = reducer(undefined, action1);

    expect(state).toEqual({
        items: [{
          name: "",
          qty: 0,
          price: 0,
          id: 0
        }]
      }
    );

    //Edit the name of the first item
    let action2 = {
      type: "EDIT",
      id: 0,
      propName: "name",
      value: "New Item"
    };

    state = reducer(state, action2);

    //Edit the added item
    expect(state).toEqual({
        items: [
          {
            name: "New Item",
            qty: 0,
            price: 0,
            id: 0
          }
        ]
      }
    );

    //Edit the quantity of the first item
    let action3 = {
      type: "EDIT",
      id: 0,
      propName: "qty",
      value: 3
    };

    state = reducer(state, action3);

    //Edit the added item
    expect(state).toEqual({
        items: [
          {
            name: "New Item",
            qty: 3,
            price: 0,
            id: 0
          }
        ]
      }
    );

    //Edit the price of the first item
    let action4 = {
      type: "EDIT",
      id: 0,
      propName: "price",
      value: 25.75
    };

    state = reducer(state, action4);

    //Edit the added item
    expect(state).toEqual({
        items: [
          {
            name: "New Item",
            qty: 3,
            price: 25.75,
            id: 0
          }
        ]
      }
    );
  });


  it('should handle DELETE', () => {
    //Add the first item
    let action1 = {
      type: "ADD",
      id: 0
    };

    let state = reducer(undefined, action1);

    expect(state).toEqual({
        items: [{
          name: "",
          qty: 0,
          price: 0,
          id: 0
        }]
      }
    );

    //Add the second item
    let action2 = {
      type: "DELETE",
      id: 0
    };

    state = reducer(state, action2);
    expect(reducer(state, action2)).toEqual({
        items: []
      }
    );
  });


});