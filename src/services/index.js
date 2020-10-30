export const fetchHelper = async (url, method, body) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { response, data };
};

export const authUser = async (isAdmin, inputs, setAuth) => {
  try {
    const { response, data } = await fetchHelper(
      `${`http://localhost:8000/`}auth`,
      "POST",
      inputs
    );
    if (isAdmin && response.status === 200) {
      if (data.isAdmin) {
        setAuth(data);
        localStorage.setItem("admin-user", JSON.stringify(data));
        return data;
      } else {
        return { data, ...{ user: true } };
      }
    } else {
      if (response.status === 200) {
        setAuth(data);
        localStorage.setItem("admin-user", JSON.stringify(data));
        return { ...data, status: true };
      }
    }
    if (response.status !== 200) {
      alert(data.info);
    }
  } catch (error) {
    alert("Servidor está fora do ar, tente novamente!");
    return error;
  }
};

export const sendEditData = async (inputs, username) => {
  try {
    const { data } = await fetchHelper(
      `${`http://127.0.0.1:8000/user/edit/${username}`}`,
      "put",
      inputs
    );
    console.log(data);
    return data;
  } catch (err) {
    let error = await err.response.json();
    console.log("Problema na comunicação com a API!");
    return error;
  }
};

export const createDataUser = async (inputs) => {
  try {
    const { data } = await fetchHelper(
      `${`http://127.0.0.1:8000/create_user`}`,
      "post",
      inputs
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const removeUserData = async (username) => {
  try {
    const { data } = await fetchHelper(
      `${`http://127.0.0.1:8000/user/remove/${username}`}`,
      "DELETE"
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
