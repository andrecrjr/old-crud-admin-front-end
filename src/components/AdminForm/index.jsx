import React, { useState } from "react";
import { sendEditData, createDataUser } from "../../services/";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Form = ({ edit, data }) => {
  const [userData, setUserData] = useState({ ...{ isAdmin: false } });
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
      console.log(newData);
      if (newData) {
        alert("Usuário editado com sucesso!");
        history.push("/admin");
      }
    } else {
      alert("Você não modificou nenhum dado!");
    }
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (Object.keys(userData).length === 7) {
      const data = await createDataUser(userData);

      if (Object.keys(data).length > 5) {
        alert("Usuário criado com sucesso");
        history.push("/admin");
      } else {
        alert("Problema na criação do usuario tente novamente");
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <section className='admin--form'>
      <p style={{ marginLeft: "15px" }}>
        <Link to={"/admin"} style={{ textDecoration: "none" }}>
          👈 Voltar
        </Link>
      </p>
      <form
        onSubmit={edit ? editUserData : createUser}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <fieldset>
          <label htmlFor='nickname'>Nickname do usuário:</label>
          <input
            type='text'
            id='nickname'
            placeholder={!edit ? "Digite o seu username" : data.username}
            value={userData.username}
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ username: e.target.value },
              }))
            }
            checked={false}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Nome do usuário:</label>
          <input
            type='text'
            id='name'
            placeholder={!edit ? "Digite o seu username" : data.name}
            value={userData.name}
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ name: e.target.value },
              }))
            }
            checked={false}
          />
        </fieldset>
        <fieldset>
          <label htmlFor=''>Senha do usuário:</label>
          <input
            type='password'
            placeholder={
              !edit ? "Digite uma senha" : "************************"
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
          <label htmlFor=''>E-mail do usuário:</label>
          <input
            type='email'
            placeholder={!edit ? "Digite seu email" : data.email}
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
            placeholder={!edit ? "Digite seu telefone" : data.telephone}
            maxLength='9'
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
            maxLength='12'
            placeholder={!edit ? "Digite seu CPF" : data.cpf}
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
            onChange={(e) =>
              setUserData((oldData) => ({
                ...oldData,
                ...{ isAdmin: e.target.checked },
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
