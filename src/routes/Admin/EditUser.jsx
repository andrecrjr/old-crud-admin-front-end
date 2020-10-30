import React from "react";
import Form from "../../components/AdminForm";
import { useLocation } from "react-router";
import Layout from "../../components/Container";
const UserEdit = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <h1 style={{ textAlign: "center", fontSize: "18px" }}>
        Edição de usuário {state.username}
      </h1>
      <Form edit={true} data={state} />
    </Layout>
  );
};

export default UserEdit;
