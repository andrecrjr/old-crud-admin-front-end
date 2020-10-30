import React, { useState } from "react";
import { sendEditData } from "../../services/";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Form = ({ edit, data }) => {
  const [userData, setUserData] = useState({ ...{} });
  const history = useHistory();

  const getEditData = async () => {
    try {
      const newData = await sendEditData(userData, data.username);
      return newData;
    } catch (error) {
      alert(error);
    }
  };

  const editUserData = (e) => {
    e.preventDefault();
    if (Object.keys(userData).length > 0) {
      const newData = getEditData();
      if (!newData.error) {
        console.log(newData);
        alert(newData.info);
        history.push("/admin");
      }
    } else {
      alert("Você não modificou nenhum dado!");
    }
  };

  return (
    <section className='admin--form'>
      <p>
        <Link to={"/admin"}>Retornar ao Admin</Link>
      </p>
      <form
        onSubmit={edit ? editUserData : null}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <fieldset>
          <label htmlFor=''>Username:</label>
          <input
            type='text'
            placeholder={
              !edit.toString() === "true"
                ? "Digite o seu username"
                : data.username
            }
            value={userData.username}
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ username: e.target.value },
              }))
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor=''>Password:</label>
          <input
            type='password'
            placeholder={
              !edit.toString() === "true"
                ? "Digite uma senha"
                : "************************"
            }
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ password: e.target.value },
              }))
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor=''>E-mail:</label>
          <input
            type='email'
            placeholder={
              !edit.toString() === "true" ? "Digite seu email" : data.email
            }
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ email: e.target.value },
              }))
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor=''>Telefone:</label>
          <input
            type='text'
            placeholder={
              !edit.toString() === "true"
                ? "Digite seu telefone"
                : data.telephone
            }
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ telephone: e.target.value },
              }))
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor=''>CPF:</label>
          <input
            type='text'
            placeholder={
              !edit.toString() === "true" ? "Digite seu CPF" : data.cpf
            }
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ cpf: e.target.value },
              }))
            }
          />
        </fieldset>
        <fieldset>
          <label for='is-admin'>É admin?</label>
          <input
            type='checkbox'
            id='is-admin'
            placeholder={data.isAdmin}
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ isAdmin: data.isAdmin || e.target.checked },
              }))
            }
          />
        </fieldset>
        <button type='submit' className='button--main'>
          {!edit ? "Criar usuário!" : "Editar usuário!"}
        </button>
      </form>
    </section>
  );
};

export default Form;
