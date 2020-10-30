import React from "react";
import { fetchHelper } from "../../services";

const UserInformations = () => {
  const getUser = async (username) => {
    return await fetchHelper(`http://localhost:8000/user/${username}`, "get");
  };
  React.useEffect(() => {
    const data = getUser(localStorage.getItem("admin-user").username);
    console.log(data);
  }, []);
  return (
    <section className='user__dashboard'>
      <p></p>
    </section>
  );
};

export default UserInformations;
