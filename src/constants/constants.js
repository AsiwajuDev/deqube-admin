import React from "react";
import * as Icon from "react-feather";

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
    label: "Directory",
    isActive: false,
    icon: <Icon.Activity />,
    url: "/directory",
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
        url: "/settings/general-settings",
        icon: <Icon.Settings />,
        subItems: [],
        isSub: true,
      },
      {
        label: "System Settings",
        isActive: false,
        url: "/settings/system-settings",
        icon: <Icon.Settings />,
        subItems: [],
        isSub: true,
      },
      {
        label: "Admin Settings",
        isActive: false,
        url: "/settings/admin-settings",
        icon: <Icon.Settings />,
        subItems: [],
        isSub: true,
      },
      {
        label: "Post Settings",
        isActive: false,
        url: "/settings/post-settings",
        icon: <Icon.Settings />,
        subItems: [],
        isSub: true,
      },
      {
        label: "Registration Settings",
        isActive: false,
        url: "/settings/registration-settings",
        icon: <Icon.Settings />,
        subItems: [],
        isSub: true,
      },
      {
        label: "Payment Settings",
        isActive: false,
        url: "/settings/payment-settings",
        icon: <Icon.Settings />,
        subItems: [],
      },
      {
        label: "Email Notification Settings",
        isActive: false,
        url: "/settings/notification-settings",
        icon: <Icon.Settings />,
        subItems: [],
      },
      {
        label: "Security Settings",
        isActive: false,
        url: "/settings/security-settings",
        icon: <Icon.Settings />,
        subItems: [],
      },
      {
        label: "Upload Settings",
        isActive: false,
        url: "/settings/upload-settings",
        icon: <Icon.Settings />,
        subItems: [],
      },
    ],
  },
  {
    label: "User",
    isActive: false,
    icon: <Icon.User />,
    url: "/users",
    divider: false,
    subItems: [
      {
        label: "List Users",
        isActive: false,
        url: "/users/list-users",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Groups",
        isActive: false,
        url: "/users/list-group",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Pages",
        isActive: false,
        url: "/users/list-page",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Agency",
        isActive: false,
        url: "/users/list-agency",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Admin",
        isActive: false,
        url: "/users/list-admin",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Online",
        isActive: false,
        url: "/users/list-online",
        icon: <Icon.User />,
        subItems: [],
      },
      {
        label: "List Banned",
        isActive: false,
        url: "/users/list-banned",
        icon: <Icon.User />,
        subItems: [],
      },
    ],
  },
  {
    label: "Posts",
    isActive: false,
    icon: <Icon.MessageSquare />,
    url: "/posts",
    divider: false,
    subItems: [],
  },
  {
    label: "Events",
    isActive: false,
    icon: <Icon.Calendar />,
    url: "/events",
    divider: true,
    subItems: [
      {
        label: "List Event",
        isActive: false,
        url: "/events/list-events",
        icon: <Icon.Calendar />,
        subItems: [],
      },
      {
        label: "Event Category",
        isActive: false,
        url: "/events/event-category",
        icon: <Icon.Calendar />,
        subItems: [],
      },
    ],
  },
  {
    label: "Ads",
    isActive: false,
    icon: <Icon.DollarSign />,
    url: "/ads",
    divider: false,
    subItems: [
      {
        label: "Ad Settings",
        isActive: false,
        url: "/ads/ads-settings",
        icon: <Icon.DollarSign />,
        subItems: [],
      },
      {
        label: "System Ads",
        isActive: false,
        url: "/ads/system-ads",
        icon: <Icon.DollarSign />,
        subItems: [],
      },
      {
        label: "User Ads",
        isActive: false,
        url: "/ads/user-ads",
        icon: <Icon.DollarSign />,
        subItems: [],
      },
    ],
  },
  {
    label: "Content on Demand",
    isActive: false,
    icon: <Icon.Package />,
    url: "/cod",
    divider: false,
    subItems: [
      {
        label: "CoD Settings",
        isActive: false,
        url: "/cod/cod-settings",
        icon: <Icon.Package />,
        subItems: [],
      },
      {
        label: "User CoD",
        isActive: false,
        url: "/cod/user-cod",
        icon: <Icon.Package />,
        subItems: [],
      },
      {
        label: "Cod Earnings",
        isActive: false,
        url: "/cod/cod-earnings",
        icon: <Icon.Package />,
        subItems: [],
      },
    ],
  },
  {
    label: "Pro Packages",
    isActive: false,
    icon: <Icon.Briefcase />,
    url: "/package/settings",
    divider: false,
    subItems: [
      {
        label: "Settings",
        isActive: false,
        url: "/package/settings",
        icon: <Icon.Briefcase />,
        subItems: [],
      },
      {
        label: "List Subscribers",
        isActive: false,
        url: "/package/subscribers",
        icon: <Icon.Briefcase />,
        subItems: [],
      },
      {
        label: "Earnings",
        isActive: false,
        url: "/package/earnings",
        icon: <Icon.Briefcase />,
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
        url: "/qubes/points",
        icon: <Icon.Codepen />,
        subItems: [],
      },
      {
        label: "Payments",
        isActive: false,
        url: "/qubes/qube-payments",
        icon: <Icon.Codepen />,
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
    url: "/follow-suggest",
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
    url: "/mass-notification",
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
    url: "/aggregate-data",
    divider: false,
    subItems: [],
  },
];
