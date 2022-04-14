import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { TodoAction } from "../../Context/Todos";
import { connector, PropsFromRedux } from "../../Context/Todos/Connect";
const Todo = (props: PropsFromRedux) => {
  const dispatch = useDispatch();
  const { Add_Todo, Add_Title } = bindActionCreators(TodoAction, dispatch);

  const [NewTodo, setNewTodo] = useState({
    name: "owo",
    priority: 1,
    title: "anything",
  });

  return (
    <div>
      <Link to={"/todos/input"}>Go input</Link>
      {props.Todo?.map(({ title, Todos }, key) => {
        return (
          <ul key={key}>
            <span>{title}</span>
            {Todos.length > 0
              ? Todos.map(({ title }, key) => {
                  return (
                    <li key={key}>
                      <span>{title}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
        );
      })}
      <button onClick={() => Add_Todo({ name: "etc", priority: 1, id: 1 })}>
        noice
      </button>
      <button onClick={() => Add_Title({ title: "etc", level: 2 })}>
        noice
      </button>
    </div>
  );
};

export default connector(Todo);
