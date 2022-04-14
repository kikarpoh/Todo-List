import React from "react";
import * as Pages from "../Pages";
import { Route, Routes } from "react-router-dom";
import cn from "classnames";
import "../Style/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../Context/Allreducers";
import { bindActionCreators } from "redux";
import { ActionCreator } from "../Context/Theme";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Router: React.FC = () => {
  const { Theme, IsSidebarEnable } = useSelector((state: State) => state.theme);
  const dispatch = useDispatch();
  const { Toggle_Sidebar } = bindActionCreators(ActionCreator, dispatch);
  const Section = cn({
    section: true,
    section_dark: Theme === "Dark" ? true : false,
    section_open: IsSidebarEnable,
  });

  const arrow = cn({
    arrow: true,
    arrow_Opened: IsSidebarEnable ? true : false,
    arrow_Dark: Theme === "Dark" ? true : false,
  });
  return (
    <section className={Section}>
      <div className={arrow} onClick={() => Toggle_Sidebar()}>
        {IsSidebarEnable ? (
          <BiChevronLeft size={"22px"} />
        ) : (
          <BiChevronRight size={"22px"} />
        )}
      </div>

      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/settings" element={<Pages.Settings />} />
        <Route path="/tasks" element={<Pages.Tasks />} />
        <Route path="/todos">
          <Route index element={<Pages.Todo />} />
          <Route path="input" element={<Pages.Input />} />
        </Route>

        <Route path="/timetable" element={<Pages.Timetable />} />
      </Routes>
    </section>
  );
};

export default Router;
