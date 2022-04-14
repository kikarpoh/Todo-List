import { connect, ConnectedProps } from "react-redux";
import { createSelector } from "reselect";
import { State } from "../../Allreducers";

const TodoSelector = createSelector(
  (state: State) => state.todos,
  (todos) => {
    console.log(todos);
    return todos;
  }
);
const mapStateToProps = (state: State) => {
  console.log(`The State is changed , ${state}`);
  return {
    Todo: TodoSelector(state),
  };
};

export const connector = connect(mapStateToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;
