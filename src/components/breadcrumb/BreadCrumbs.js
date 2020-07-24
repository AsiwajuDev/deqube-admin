import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import routes from "./BreadCrumbItems";

const BreadCrumbs = () => {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    );
  };
  return <Breadcrumb itemRender={itemRender} routes={routes} />;
};

export default BreadCrumbs;
