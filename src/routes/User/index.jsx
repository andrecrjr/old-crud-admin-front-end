import React from "react";

const UserLogin = () => {
  return (
    <section
      className='container'
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <section className='user--login'>
        <h1>Autenticação de Usuário</h1>
        <form className='user--login__form'>
          <input type='text' placeholder='Username do usuário' />
          <input type='text' placeholder='Senha do usuário' />
          <button className='main--button' style={{ width: "25%" }}>
            Login!
          </button>
        </form>
      </section>
    </section>
  );
};

export default UserLogin;
