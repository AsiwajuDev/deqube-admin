import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SideNav, Chevron } from "react-side-nav";
import * as Icon from "react-feather";

const menuItems = [
  {
    id: 1,
    label: "Item 2",
    icons: <Icon.Home />,
    link: "/dashboard",
  },
  {
    id: 2,
    label: "Item 1",
    icons: <Icon.Settings />,
    animationTime: 1000,
    items: [
      {
        id: 11,
        label: "Item 1.1",
        icons: <Icon.Settings />,
        link: "/settings",
      },
      {
        id: 12,
        label: "Item 1.2",
        icons: <Icon.Settings />,
        link: "/admin-settings",
      },
    ],
  },
  //   {
  //     id: 2,
  //     label: "Item 2",
  //     icon: "fas fa-camera",
  //     link: "/item2",
  //   },
  {
    id: 3,
    label: "Item 3",
    icons: <Icon.User />,
    link: "/item3",
  },
  {
    id: 4,
    label: "Item 4",
    icons: <Icon.User />,
    items: [
      {
        id: 41,
        label: "Item 4.1",
        icons: <Icon.User />,
        items: [
          {
            id: 411,
            label: "Item 4.1.a",
            icons: <Icon.User />,
            link: "/item41/a",
          },
          {
            id: 412,
            label: "Item 4.1.b",
            icons: <Icon.User />,
            link: "/item41/b",
          },
        ],
      },
      {
        id: 42,
        label: "Item 4.2",
        icons: <Icon.User />,
        link: "/item42",
      },
      {
        id: 43,
        label: "Item 4.3",
        icons: <Icon.User />,
        link: "/item43",
      },
    ],
  },
];
const MChevron = (props) => {
  return props.icon;
};

const NavLink = (props) => {
  console.log("IDD: " + props.to);

  return (
    <Link to={props.to} {...props}>
      {props.icons}
      {props.label}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
};

NavLink.defaultProps = {
  to: "#",

  label: "",
};

class SideMenu extends Component {
  state = {
    activate: null,
  };

  clickActivate = (event) => {
    event.preventDefault();
    const activate = "/item41/a";
    console.log("ID: " + this.props.id);

    this.setState({ activate });
  };

  render() {
    return (
      <div style={{ maxWidth: "13.75rem", padding: 0 }}>
        <SideNav
          items={menuItems}
          activeItem={this.state.activate}
          linkComponent={NavLink}
          chevronComponent={Chevron}
          iconComponent={Icon}
        />
        <button
          onClick={() => {
            this.clickActivate();
          }}
        >
          Click to activate the item with the link &quot;/item41/a&quot;
        </button>
      </div>
    );
  }
}
export default SideMenu;
