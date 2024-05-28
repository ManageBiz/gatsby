import React, { ComponentType } from 'react';
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"
import { RouteComponentProps } from '@reach/router';

interface PrivateRouteProps extends RouteComponentProps {
  component: ComponentType<RouteComponentProps>;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location?.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.any
}

export default PrivateRoute