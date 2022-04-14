import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { TodoAction } from "../../Context/Todos";
import { connector, PropsFromRedux } from "../../Context/Todos/Connect";
import { Link } from "react-router-dom";
const Input = ({ Todo }: PropsFromRedux) => {
  const dispatch = useDispatch();
  const { Add_Title, Add_Todo } = bindActionCreators(TodoAction, dispatch);
  const [Text, setText] = useState<string>("");
  const defaultForm = () => {
    setText("");
  };
  return (
    <>
      <Link to={"/todos"}>Back to Todos</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          defaultForm();
        }}
      >
        <input
          type="text"
          value={Text}
          onChange={(e) => {
            console.log(e.target.value.toString());
            setText(e.target.value);
          }}
        />
        <button type="submit">sumbit</button>
      </form>
    </>
  );
};

export default connector(Input);
