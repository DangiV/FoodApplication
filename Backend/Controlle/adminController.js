import AdminModel from "../Model/adminSchema.js";
import bcrypt from 'bcrypt'
import {  CreateToken } from "../auth.js";

export const UserRegister = async (req, res, next) => {
    const { fname, lname, email } = req.body;

    try {
        const UserData = await AdminModel.findOne({ email })
        if (UserData) {
            res.status(400).json("user email already exits")
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const CreateUser = await AdminModel.create({ fname: fname, lname: lname, email: email, password: hashPassword })
        res.status(200).json(CreateUser)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AdminModel.findOne({ email });
        if (!user) {
            res.status(400).json('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(passwordMatch){
            CreateToken(user.id);
            const userDetails = {
                userId: user,
                message: 'User login successfully'
            }
            res.status(200).json(userDetails);
        }else{
            res.status(400).json('Incorrect password')
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};