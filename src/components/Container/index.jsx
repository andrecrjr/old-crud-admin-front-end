import React from "react";
import { useHistory } from "react-router";

const Layout = ({ isAuth, children }) => {
  const [data, setData] = React.useState(
    localStorage.getItem("admin-user") || null
  );

  const history = useHistory();

  React.useEffect(() => {
    if (isAuth) setData(isAuth.auth || false);
  }, [isAuth]);

  React.useEffect(() => {
    if (!data && history.location.pathname !== "/") {
      history.push("/admin");
    }
  }, [data, history]);

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
        {history.location.pathname.includes("/admin") ? (
          <div>Administração CRUD Mongo</div>
        ) : (
          <p>Autenticação do Usuário</p>
        )}
        {data && <div onClick={logout}>Logout</div>}
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
