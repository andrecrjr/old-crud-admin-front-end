import React from "react";
import Form from "../../components/AdminForm";
import Layout from "../../components/Container";

const NewUser = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", fontSize: "18px" }}>
        Criação de Usuário
      </h1>
      <Form edit={false} />
    </Layout>
  );
};

export default NewUser;
