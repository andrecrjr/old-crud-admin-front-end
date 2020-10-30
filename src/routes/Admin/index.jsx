import React, { useState } from "react";
import { UserTable } from "./UserTable";
import { authUser } from "../../services";

const Admin = (props) => {
  const [inputs, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  const [userAuth, setAuth] = useState(
    JSON.parse(localStorage.getItem("admin-user")) || false
  );

  const _sendAuth = (e) => {
    e.preventDefault();
    console.log();
    authUser(inputs, setAuth, setError);
  };

  return (
    <section className={`container${!userAuth ? `--auth` : ""}`}>
      {!userAuth && (
        <section className='admin--login'>
          <h1>Login do Admin</h1>
          <form className='admin--login__form' onSubmit={_sendAuth}>
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
      {userAuth && <UserTable />}
    </section>
  );
};

export default Admin;
