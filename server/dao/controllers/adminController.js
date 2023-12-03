const Admin = require ('../models/adminModel')
const bcrypt = require ('bcrypt')
const jsonwebtoken = require ('jsonwebtoken')


const addAdmin = async(req,res,next) =>{
    const { email, password} = req.body;

    if (!email && email.trim() === "" && 
    !password && password.trim() === "") {

  return res.status(422).json({ mensaje: "Datos invalidos" });
}

    let existingAdmin;

    try{
        existingAdmin = await Admin.findOne({email})
     } 
    catch(err){
        return console.log(err)
    }

    if(existingAdmin){ 
        return res.status(400).json({mensaje: "Admin ya existente"})
    }

    let admin;

    const hashedPassword =  bcrypt.hashSync(password , 10);
    try{
        admin = new Admin({email, password: hashedPassword })
        admin = await admin.save()
     }catch (err) {
        return console.log(err)
     }
    
     if(!admin){
        return res.status(500).json({mensaje: "No se puede almacenar"})
     }
     return res.status(201).json({admin})

}

const adminLogin =  async (req, res, next) =>{
    const { email, password} = req.body;

    if (!email && email.trim() === "" && 
    !password && password.trim() === "") {

    return res.status(422).json({ mensaje: "Datos invalidos" });
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email})
    }catch(err){
        return console.log(err)
    }

    if(!existingAdmin){
        return res.status(400).json({mensaje: "Admin no encontrado"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingAdmin.password)

    if(!isPasswordCorrect){
        return res.status(400).json({mensaje: "Contraseña incorrecta"})
    }

    const token = jsonwebtoken.sign({id: existingAdmin._id},process.env.SECRET_KEY, {
        expiresIn: "7d", //crear los libros expira en 7dias
    });


    return res.status(200).json({mensaje: "Autenticacion completada", token, id:existingAdmin._id})
    
}

const getAdmins = async (req, res, next) =>{
    let admins;

    try{
        admins = await Admin.find();
    }catch(err){
        console.log(err)
    }
    if(!admins){
        return res.status(500).json({mensaje: "Error en el servidor"})
    }
    return res.status(200).json({ admins })
}


module.exports = {addAdmin , adminLogin, getAdmins}