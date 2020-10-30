import React from "react";
import { fetchHelper } from "../../services";

const UserInformations = () => {
  const [user, setUser] = React.useState({});
  const getUser = async (
    username = JSON.parse(localStorage.getItem("admin-user")).username
  ) => {
    try {
      const { data } = await fetchHelper(
        `http://localhost:8000/user/${username}`,
        "get"
      );
      setUser(data);
    } catch (error) {}
  };
  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <section className='user__dashboard'>
          <section>
            <h1>Dados do usuário:</h1>
          </section>
          <section>
            <section className='dashboard__label'>Nickname:</section>
            <span></span>
            <section className='dashboard__info'>{user.username}</section>
          </section>
          <section>
            <section className='dashboard__label'>Nome do usuário:</section>
            <span></span>
            <section className='dashboard__info'>{user.name}</section>
          </section>
          <section>
            <section className='dashboard__label'>Telefone do usuário:</section>
            <span></span>
            <section className='dashboard__info'>{user.telephone}</section>
          </section>
          <section>
            <section className='dashboard__label'>CPF do usuário:</section>
            <span></span>
            <section className='dashboard__info'>{user.cpf}</section>
          </section>
        </section>
      )}
    </>
  );
};

export default UserInformations;
