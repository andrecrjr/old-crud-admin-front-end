import React, { useState } from "react";
import { UserTable } from "./UserTable";
import { authUser } from "../../services";
import Layout from "../../components/Container";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [inputs, setInput] = useState({ username: "", password: "" });
  const [userAuth, setAuth] = useState(
    JSON.parse(localStorage.getItem("admin-user")) || false
  );
  const history = useHistory();

  const sendAuth = async (e) => {
    e.preventDefault();
    console.log();
    const data = authUser(true, inputs, setAuth);
    const response = await data;
    if (response) {
      if (response.user) history.push("/");
    }
  };

  console.log(userAuth);

  return (
    <Layout isAuth={userAuth}>
      <section className={`container${!userAuth ? `--auth` : ""}`}>
        {!userAuth && (
          <section className='admin--login'>
            <h1>Login do Admin</h1>
            <form className='admin--login__form' onSubmit={sendAuth}>
              <input
                type='text'
                value={inputs.username}
                placeholder='Username de usuário'
                onChange={(e) =>
                  setInput((oldData) => ({
                    ...oldData,
                    ...{ username: e.target.value },
                  }))
                }
              />
              <input
                type='password'
                value={inputs.password}
                placeholder='Senha de usuário'
                onChange={(e) =>
                  setInput((oldData) => ({
                    ...oldData,
                    ...{ password: e.target.value },
                  }))
                }
              />
              <button type='submit' className='button--main'>
                Login
              </button>
            </form>
          </section>
        )}
        {userAuth && userAuth.isAdmin && <UserTable />}
      </section>
    </Layout>
  );
};

export default Admin;
