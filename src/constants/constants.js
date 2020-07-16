import React from "react";
import * as Icon from "react-feather";

export const items = [
  { divider: false, label: "", value: "main-nav" },
  { label: "Dashboard", value: "Dashboard", icon: <Icon.Home /> },
  {
    label: "Settings",
    value: "Settings",
    icon: <Icon.Settings />,
    children: [
      {
        label: "Settings",
        value: "Settings",
        icon: <Icon.Settings />,
      },
    ],
  },
];

export const menuItems = [
  {
    label: "Dashboard",
    isActive: true,
    icon: <Icon.Home />,
    url: "/dashboard",
    divider: false,
    isSub: false,
    subItems: [],
  },
  {
    label: "Settings",
    isActive: false,
    icon: <Icon.Settings />,
    url: "/settings",
    divider: true,
    isSub: false,
    subItems: [
      {
        label: "General Settings",
        isActive: false,
        url: "/settings",
        subItems: [],
        isSub: true,
      },
      {
        label: "System Settings",
        isActive: false,
        url: "/system-settings",
        subItems: [],
        isSub: true,
      },
      {
        label: "Admin Settings",
        isActive: false,
        url: "/admin-settings",
        subItems: [],
        isSub: true,
      },
      {
        label: "Post Settings",
        isActive: false,
        url: "/post-settings",
        subItems: [],
        isSub: true,
      },
      {
        label: "Registration Settings",
        isActive: false,
        url: "/registration-settings",
        subItems: [],
        isSub: true,
      },
      {
        label: "Payment Settings",
        isActive: false,
        url: "/payment-settings",
        subItems: [],
      },
      {
        label: "Email Notification Settings",
        isActive: false,
        url: "/notification-settings",
        subItems: [],
      },
      {
        label: "Security Settings",
        isActive: false,
        url: "/security-settings",
        subItems: [],
      },
      {
        label: "Upload Settings",
        isActive: false,
        url: "/upload-settings",
        subItems: [],
      },
    ],
  },
  {
    label: "User",
    isActive: false,
    icon: <Icon.User />,
    url: "/list-user",
    divider: false,
    subItems: [
      {
        label: "List Users",
        isActive: false,
        url: "/list-user",
        subItems: [],
      },
      {
        label: "List Groups",
        isActive: false,
        url: "/list-group",
        subItems: [],
      },
      {
        label: "List Pages",
        isActive: false,
        url: "/list-page",
        subItems: [],
      },
      {
        label: "List Agency",
        isActive: false,
        url: "/list-agency",
        subItems: [],
      },
      {
        label: "List Admin",
        isActive: false,
        url: "/list-admin",
        subItems: [],
      },
      {
        label: "List Online",
        isActive: false,
        url: "/list-online",
        subItems: [],
      },
      {
        label: "List Banned",
        isActive: false,
        url: "/list-banned",
        subItems: [],
      },
    ],
  },
  {
    label: "Posts",
    isActive: false,
    icon: <Icon.MessageSquare />,
    url: "/posts ",
    divider: false,
    subItems: [],
  },
  {
    label: "Events",
    isActive: false,
    icon: <Icon.Calendar />,
    url: "/event",
    divider: true,
    subItems: [
      {
        label: "List Event",
        isActive: false,
        url: "/event",
        subItems: [],
      },
      {
        label: "Event Category",
        isActive: false,
        url: "/event-category",
        subItems: [],
      },
    ],
  },
  {
    label: "Ads",
    isActive: false,
    icon: <Icon.DollarSign />,
    url: "/ads-settings",
    divider: false,
    subItems: [
      {
        label: "Ad Settings",
        isActive: false,
        url: "/ads-settings",
        subItems: [],
      },
      {
        label: "System Ads",
        isActive: false,
        url: "/system-ads",
        subItems: [],
      },
      {
        label: "User Ads",
        isActive: false,
        url: "/user-ads",
        subItems: [],
      },
    ],
  },
  {
    label: "Content on Demand",
    isActive: false,
    icon: <Icon.Package />,
    url: "/cod-settings",
    divider: false,
    subItems: [
      {
        label: "CoD Settins",
        isActive: false,
        url: "/cod-settings",
        subItems: [],
      },
      {
        label: "User CoD",
        isActive: false,
        url: "/user-cod",
        subItems: [],
      },
      {
        label: "Cod Earnings",
        isActive: false,
        url: "/cod-earnings",
        subItems: [],
      },
    ],
  },
  {
    label: "Pro Packages",
    isActive: false,
    icon: <Icon.Briefcase />,
    url: "/package",
    divider: false,
    subItems: [
      {
        label: "Settins",
        isActive: false,
        url: "/package",
        subItems: [],
      },
      {
        label: "List Subscribers",
        isActive: false,
        url: "/subscribers",
        subItems: [],
      },
      {
        label: "Earnings",
        isActive: false,
        url: "/earnings",
        subItems: [],
      },
    ],
  },
  {
    label: "Qubes",
    isActive: false,
    icon: <Icon.Codepen />,
    url: "/qubes",
    divider: true,
    subItems: [
      {
        label: "Points",
        isActive: false,
        url: "/qubes",
        subItems: [],
      },
      {
        label: "Payments",
        isActive: false,
        url: "/qube-payments",
        subItems: [],
      },
    ],
  },
  {
    label: "Reports",
    isActive: false,
    icon: <Icon.FileText />,
    url: "/reports",
    divider: false,
    subItems: [],
  },
  {
    label: "Verification",
    isActive: false,
    icon: <Icon.Key />,
    url: "/verification",
    divider: false,
    subItems: [],
  },
  {
    label: "Follow Suggest",
    isActive: false,
    icon: <Icon.Link />,
    url: "/folow-suggest",
    divider: false,
    subItems: [],
  },
  {
    label: "Gabbage Collector",
    isActive: false,
    icon: <Icon.Archive />,
    url: "/gabbage",
    divider: false,
    subItems: [],
  },
  {
    label: "Mass Notification",
    isActive: false,
    icon: <Icon.Volume2 />,
    url: "/notification",
    divider: true,
    subItems: [],
  },
  {
    label: "Emojis",
    isActive: false,
    icon: <Icon.Smile />,
    url: "/emojis",
    divider: false,
    subItems: [],
  },
  {
    label: "Reactions",
    isActive: false,
    icon: <Icon.Target />,
    url: "/reactions",
    divider: true,
    subItems: [],
  },
  {
    label: "Aggregate Data",
    isActive: false,
    icon: <Icon.Database />,
    url: "/data",
    divider: false,
    subItems: [],
  },
];
