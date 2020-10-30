import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const UserTable = () => {
  const [users, setUsers] = useState();
  const [errors, setError] = useState();
  const history = useHistory();
  const fetchUsers = async () => {
    try {
      const data = await fetch("http://127.0.0.1:8000/users");
      setUsers(await data.json());
    } catch (error) {
      setError(error);
    }
  };
  const goToEdit = (e, data) => {
    e.preventDefault();
    console.log(data);
    history.push("/admin/edit", data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className='admin--container'>
      <section className='admin--container__menu'>
        <button className='button--main blue'>Cadastrar usuario</button>
      </section>
      <div className='table--container' style={{ overflowX: "auto" }}>
        <table className='table--users'>
          <thead>
            <tr>
              <td>Nome Usuário</td>
              <td>E-mail</td>
              <td>Nome do Usuário</td>
              <td>Telefone</td>
              <td>CPF</td>
              <td>É admin?</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <>
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.telephone}</td>
                    <td>{user.cpf}</td>
                    <td>{user.isAdmin ? `Sim` : `Não`}</td>
                    <td onClick={(e) => goToEdit(e, { ...user })}>✏</td>
                    <td>✖</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
