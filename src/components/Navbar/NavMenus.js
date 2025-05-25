const NavMenus = (role="user") => {
  return [
    { path: "/", pathName: "Home" },
    { path: "/about", pathName: "About" },
    {
      path: `${role === "admin" ? "/dashboard" : "/services"}`,
      pathName: `${role === "admin" ? "Dashboard" : "Services"}`,
    },
    { path: "/blog", pathName: "Blog" },
    { path: "/contact", pathName: "Contact" },
  ];
};

export default NavMenus;
