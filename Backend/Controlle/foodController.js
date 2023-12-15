import FoodItem from "../Model/foodSchema.js";

export  const CreateFoodItem = async (req,res) =>{
    const {CategoryName , FoodName , ImgUrl , Description } = req.body;

    try {
        const item = await FoodItem.create({CategoryName : CategoryName , FoodName : FoodName , ImgUrl : ImgUrl ,  Description : Description})
        res.status(200).json(item)
    } catch (error) {
        console.log(error);
    }
}

export const GetAllFoodItem = async (req,res) =>{
    try {
        const getAllItem = await FoodItem.find({})
        res.status(200).json(getAllItem)
    } catch (error) {
        console.log(error);
    }
}