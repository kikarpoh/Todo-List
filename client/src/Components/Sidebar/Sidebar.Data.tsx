import React from "react";
import { BiCog, BiHome, BiTimeFive } from "react-icons/bi";

import { BsListCheck } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";
type DataTypes = {
  Name: string;
  Icons: JSX.Element;
  Links: string;
}[];

const Data: DataTypes = [
  {
    Name: "Home",
    Icons: <BiHome />,
    Links: "/",
  },
  {
    Name: "Settings",
    Icons: <BiCog />,
    Links: "/settings",
  },
  {
    Name: "Todos",
    Icons: <BsListCheck />,
    Links: "/todos",
  },
  {
    Name: "Timetable",
    Icons: <BiTimeFive />,
    Links: "/timetable",
  },
  {
    Name: "Tasks",
    Icons: <MdTaskAlt />,
    Links: "/tasks",
  },
];

export default Data;
