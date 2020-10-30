export const authUser = async (inputs, setAuth, setError) => {
  try {
    const response = await fetch(`${`http://localhost:8000/`}auth`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    if (data.isAdmin) {
      setAuth(data);
      localStorage.setItem("admin-user", JSON.stringify(data));
    } else {
      setError({ error: true, info: "Você não é admin" });
      alert("Você não é admin");
    }
  } catch (error) {
    console.log(error);
    alert("Servidor está fora do ar, tente novamente!");
  }
};

export const sendEditData = async (inputs, username) => {
  try {
    const response = await fetch(
      `${`http://127.0.0.1:8000/user/edit/${username}`}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log("Problema na comunicação com a API!");
  }
};
