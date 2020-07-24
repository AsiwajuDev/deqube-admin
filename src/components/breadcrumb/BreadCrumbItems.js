const routes = [
  {
    path: "/dashboard",
    breadcrumbName: "Dashboard",
  },
  {
    path: "/directory",
    breadcrumbName: "Directory",
  },
  {
    path: "Settings",
    breadcrumbName: "Settings",
    children: [
      {
        path: "/general",
        breadcrumbName: "General",
      },
      {
        path: "/layout",
        breadcrumbName: "Layout",
      },
      {
        path: "/navigation",
        breadcrumbName: "Navigation",
      },
    ],
  },
  {
    path: "second",
    breadcrumbName: "second",
  },
];
