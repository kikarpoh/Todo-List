import React, { FC } from "react";
import { Sidebar } from "./Components";
import "./Style/index.scss";
const App: FC = (): JSX.Element => {
  return (
    <div className="body">
      <Sidebar />
    </div>
  );
};

export default App;
