import axios from "axios";


export const getAllBooks = async () => {

    const res = await axios
        .get("http://localhost:5000/book")
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("No hay datos")
    }

    const data = await res.data;
    return data;
};


export const sendUserLoginRequest = async (data, signup) => {
    const res = await axios
        .post(`/user/${signup ? "signup" : "login"}`, {
            nombre: signup ? data.nombre : "",
            email: data.email,
            password: data.password
        }).catch((err) => console.log(err))

    if (res.status !== 200 && res.status !== 201) {
        console.log("error inesperado")
    }

    const resData = await res.data;
    return resData;
}

export const sendAdminLoginRequest = async (data) => {
    const res = await axios
        .post("/admin/login", {
            email: data.email,
            password: data.password,
        })
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Error inesperado")
    }

    const resData = await res.data;
    return resData;
}

export const getBookDetails = async (id) => {
    const res = await axios
        .get(`/book/${id}`)
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Error inesperado");
    }
    const resData = await res.data;
    return resData;
};

export const addBook = async (data) => {
    const res = await axios
      .post("/book",
        {
          titulo: data.titulo,
          autor: data.autor,
          descripcion: data.descripcion,
          postUrl: data.postUrl,
          admin: localStorage.getItem("adminId"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .catch((err) => console.log(err));
  
    if (res.status !== 201) {
      return console.log("Error inesperado");
    }
  
    const resData = await res.data;
    return resData;
  };