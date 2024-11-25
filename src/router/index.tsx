import React, { useState } from "react";
import UnAuthRotes from "./UnAuthRotes";
import AuthRoutes from "./AuthRoutes";

const MainRouter = () => {
  const [isAuth] = useState(false);

  return <div>{isAuth ? <AuthRoutes /> : <UnAuthRotes />}</div>;
};

export default React.memo(MainRouter);
