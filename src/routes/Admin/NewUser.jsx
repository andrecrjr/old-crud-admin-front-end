import React from "react";
import Form from "../../components/AdminForm";

const NewUser = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "18px" }}>
        Criação de Usuário
      </h1>
      <Form edit={false} />
    </>
  );
};

export default NewUser;
