import React from "react";

const Layout = ({ isAuth, children }) => {
  const [data, setData] = React.useState(
    localStorage.getItem("admin-user") || null
  );

  React.useEffect(() => {
    setData(isAuth.auth || false);
    console.log(data);
  }, [isAuth]);

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
        {data && <div onClick={logout}>Logout</div>}
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
