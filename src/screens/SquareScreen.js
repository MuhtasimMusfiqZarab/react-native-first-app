import React, { useReducer } from "react";
import { View, Text } from "react-native";
//reusable component
import ColorCounter from "../components/ColorCounter";

const COLOR_CHANGE = 15;

//write reducer before usereducer call (outside the component for avaoiding confusion)
//must return some value from the reducers (coz the return value will be provided to state)
// reducer is called with two objects (state obj, obejct define how to change state)
//action =>> how we change state object
const reducer = (state, action) => {
  //state==={red :number, green: number, blue: number}
  //action=={colorTOChange: red || green || blue, amount:15 || -15}
  //check action first to make changes
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      // returning new state without changing the preivous one
      return { ...state, red: state.red + action.amount };
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //dispatch(runReducer)
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //destructuring state
  const { red, green, blue } = state;

  return (
    <View>
      {/* These three will change the rgb values in the state */}
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_CHANGE })
        } //dispatching action obj(action obj defines how to change state)
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_CHANGE })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_CHANGE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_CHANGE })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_CHANGE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_CHANGE })
        }
        color="Green"
      />

      {/* The box to show  */}
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

export default SquareScreen;
