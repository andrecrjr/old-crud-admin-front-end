import React from "react";
import { useHistory } from "react-router";

const Layout = ({ isAuth, children }) => {
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("admin-user")) || null
  );

  const history = useHistory();

  React.useEffect(() => {
    if (isAuth) setData(isAuth || false);
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
        {data && data.auth && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ paddingRight: "25px", fontWeight: "bold" }}>
              {data.username}
            </div>{" "}
            <span onClick={logout} style={{ cursor: "pointer" }}>
              Logout ↩
            </span>
          </div>
        )}
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
