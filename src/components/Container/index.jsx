import React from "react";

const Layout = ({ children }) => {
  const logout = (e) => {
    e.preventDefault();
    if (localStorage.getItem("admin-user")) {
      localStorage.removeItem("admin-user");
      window.location.reload();
    }
  };
  return (
    <>
      <header className='header'>
        <div>Administração CRUD Mongo</div>
        {localStorage.getItem("admin-user") && (
          <div onClick={logout}>Logout</div>
        )}
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
