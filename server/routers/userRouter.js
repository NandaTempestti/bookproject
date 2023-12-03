const express = require ('express')
const {deleteUser,
    getAllUsers,
    getBookingsOfUser,
    getUserById,
    login,
    signup,
    updateUser} = require ('../dao/controllers/userController')

const userRouter = express.Router();


userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById); 
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser); 


module.exports = userRouter;





