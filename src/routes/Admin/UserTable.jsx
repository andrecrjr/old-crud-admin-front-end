import React, { useEffect, useState } from "react";

export const UserTable = () => {
  const [users, setUsers] = useState();
  const [errors, setError] = useState();
  const fetchUsers = async () => {
    try {
      const data = await fetch("http://127.0.0.1:8000/users");
      setUsers(await data.json());
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <table className='table--users'>
      <thead>
        <td>Nome Usuário</td>
        <td>E-mail</td>
        <td>Nome do Usuário</td>
        <td>Telefone</td>
        <td>CPF</td>
        <td>É admin?</td>
        <td>Editar</td>
        <td>Excluir</td>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.telephone}</td>
              <td>{user.cpf}</td>
              <td>{user.isAdmin ? `Sim` : `Não`}</td>
              <td>✏</td>
              <td>✖</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
