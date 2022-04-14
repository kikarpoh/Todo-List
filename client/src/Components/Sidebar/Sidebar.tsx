import React, { FC } from "react";
import { Link } from "react-router-dom";
import Data from "./Sidebar.Data";
import cn from "classnames";
import "../../Style/Components/Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreator } from "../../Context/Theme";
import { State } from "../../Context/Allreducers";
import { IconContext } from "react-icons";
import Switch from "react-switch";
import Logo from "./Sidebar.Logo";
import { BiChevronLeft, BiChevronRight, BiMoon, BiSun } from "react-icons/bi";

const Sidebar: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { Theme, IsSidebarEnable } = useSelector((state: State) => state.theme);
  const { Toggle_Sidebar, Toggle_Theme } = bindActionCreators(
    ActionCreator,
    dispatch
  );
  const SidebarClassName = cn({
    sidebar: true,
    sidebar_opened: IsSidebarEnable,
    sidebar_dark: Theme === "Dark" ? true : false,
  });

  const Logo_Names = cn({
    Logo_Name: true,
    Logo_Name_Opened: IsSidebarEnable,
    Logo_Name_Dark: Theme === "Dark" ? true : false,
  });
  const Theme_Switcher = cn({
    Theme_Switcher: true,
    Theme_Switcher_Dark: Theme === "Dark" ? true : false,
  });

  const ModeSpan = cn({
    ModeSpan: true,
    ModeSpan_Open: IsSidebarEnable,
    ModeSpan_Dark: Theme === "Dark" ? true : false,
  });

  const Li = cn({
    li: true,
    li_dark: Theme === "Dark" ? true : false,
  });
  const Span = cn({
    Span: IsSidebarEnable ? false : true,
    Span_dark: Theme === "Dark" ? true : false,
  });

  const Names = cn({
    Names: true,
    Names_Closed: IsSidebarEnable ? false : true,
  });

  const NavLinks = cn({
    navlinks: true,
    navlinks_dark: Theme === "Dark" ? true : false,
  });

  const changers = cn({
    changer: true,
    changer_opened: IsSidebarEnable,
  });
  const Mode = () => {
    if (Theme === "Light") {
      return (
        <div className="Mode_Icons">
          <BiSun size={"20px"} />
        </div>
      );
    } else {
      return (
        <div className="Mode_Icons">
          <BiMoon size={"20px"} color="#fff" />
        </div>
      );
    }
  };
  return (
    <>
      <nav className={SidebarClassName}>
        <div className="Logo_Names">
          <Logo />
          {IsSidebarEnable ? (
            <span className={Logo_Names}>Time Matrix System</span>
          ) : (
            ""
          )}
        </div>

        <IconContext.Provider value={{ size: "22px" }}>
          <ul className={NavLinks}>
            {Data.map(({ Name, Links, Icons }, key) => {
              return (
                <li key={key} className={Li}>
                  <Link to={Links} className={`Links_${key}`}>
                    <div className="Icons">{Icons}</div>
                    <span className={Names}>{Name}</span>
                    {IsSidebarEnable ? (
                      ""
                    ) : (
                      <span className={Span}>{Name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </IconContext.Provider>
        <div className={Theme_Switcher}>
          {IsSidebarEnable ? <Mode /> : ""}
          <span className={ModeSpan}>{`${Theme} Mode`}</span>
          <footer className={changers}>
            <Switch
              onChange={() => Toggle_Theme()}
              checked={Theme === "Dark" ? true : false}
              onColor="#fff"
              offColor="#DDD"
              offHandleColor="#FFF"
              onHandleColor="#242526"
              uncheckedHandleIcon={<></>}
              checkedHandleIcon={<></>}
              uncheckedIcon={<></>}
              checkedIcon={<></>}
              height={20}
              width={40}
            />
          </footer>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
