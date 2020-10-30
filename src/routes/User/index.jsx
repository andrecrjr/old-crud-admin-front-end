import React from "react";
import Layout from "../../components/Container";

const UserLogin = () => {
  return (
    <Layout>
      <section
        className='container'
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <section className='admin--login'>
          <h1>Autenticação de Usuário</h1>
          <form className='admin--login__form'>
            <input type='text' placeholder='Username do usuário' />
            <input type='text' placeholder='Senha do usuário' />
            <button className='button--main' style={{ width: "25%" }}>
              Login!
            </button>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default UserLogin;
