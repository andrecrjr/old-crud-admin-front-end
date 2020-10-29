import React from "react";
import { UserTable } from "./UserTable";

const Admin = (props) => {
  return (
    <section className='admin--container'>
      <form>
        <input type='text' />
        <input type='text' />
        <button type='submit' />
      </form>
      <UserTable />
    </section>
  );
};

export default Admin;
