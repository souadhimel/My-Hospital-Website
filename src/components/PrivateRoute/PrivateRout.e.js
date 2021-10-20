import React from "react";
import { Route, Redirect } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  // const {children, ...rest} = props;
  const { user } = useFirebase();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
