const express = require ('express')
const {addAdmin , adminLogin, getAdmins } = require ('../dao/controllers/adminController')

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);

module.exports = adminRouter;