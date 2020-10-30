import React from "react";
import Form from "../../components/AdminForm";
import { useLocation } from "react-router";

const UserEdit = () => {
  const { state } = useLocation();

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "18px" }}>
        Edição de usuário {state.username}
      </h1>
      <Form edit={true} data={state} />
    </>
  );
};

export default UserEdit;
