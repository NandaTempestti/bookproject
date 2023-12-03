const User = require ('../models/userModel');
const bcrypt = require ('bcrypt')

//import Bookings from "../models/Bookings";


const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ mensaje: "Ocurrió un error"});
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  const { nombre, email, password } = req.body;
  if (
    !nombre &&
    nombre === "" &&
    !email &&
    email === "" &&
    !password &&
    password === ""
  ) {
    return res.status(422).json({ mensaje: "Datos invalidos" });
  }

  const hashedPassword =  bcrypt.hashSync(password , 10);

  let user;
  try {
    user = new User({ 
      nombre: req.body.nombre,
      email: req.body.email,
      password: hashedPassword});

    user = await user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ mensaje: "Ocurrió un error" });
  }
  return res.status(201).json({ id: user._id });
};


const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { nombre, email, password } = req.body;
  if (
    !nombre &&
    nombre === "" &&
    !email &&
    email === "" &&
    !password &&
    password === ""
  ) {
    return res.status(422).json({ mensaje: "Datos invalidos" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      nombre,
      email,
      password: hashedPassword,
    });
  } catch (errr) {
    return console.log(errr);
  }
  if (!user) {
    return res.status(500).json({ mensaje: "Ocurrió un error" });
  }
  res.status(200).json({ mensaje: "Actualizado con exito" });
};


const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({mensaje: "Ocurrió un error" });
  }
  return res.status(200).json({ mensaje: "Eliminado con exito" });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && email.trim() === "" && 
      !password && password.trim() === "") {

    return res.status(422).json({ mensaje: "Datos invalidos" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ mensaje: "No se encontró usuario" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ mensaje: "Contraseña incorrecta" });
  }

  return res.status(200).json({ mensaje: "Logueado con exito", id: existingUser._id });
};

const getBookingsOfUser = async (req, res, next) => {
  const id = req.params.id;
  let bookings;
  try {
    bookings = await Bookings.find({ user: id })
      .populate("book")
      .populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!bookings) {
    return res.status(500).json({ message: "Error al obtener el Booking" });
  }
  return res.status(200).json({ bookings });
};
const getUserById = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ user });
}; 


module.exports = {getAllUsers, signup , updateUser, deleteUser, login,getBookingsOfUser, getUserById } 