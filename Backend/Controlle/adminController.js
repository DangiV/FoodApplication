import AdminModel from "../Model/adminSchema.js";

export const UserRegister = async (req, res) => {
    const { fname, lname, email, password } = req.body

    try {
        const UserData = await AdminModel.findOne({ email: email })

        if (UserData) {
            res.status(400).json("user email already exits")
        }
        else {
            const CreateUser = await AdminModel.create({ fname: fname, lname: lname, email: email, password: password })
            res.status(200).json(CreateUser)
        }

    } catch (error) {
        console.log(error);
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const UserFind = await AdminModel.findOne({ email: email, password: password })
        if (UserFind) {
            res.status(200).json('user login successfully')
        }
        else {
            res.status(400).json("check your credential")
        }
    } catch (error) {
        console.log(error);
    }
}