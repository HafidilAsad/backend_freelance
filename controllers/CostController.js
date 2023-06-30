import Cost from "../models/CostModel.js";

export const createCost = async(req, res) =>{
    try {
        await Cost.create(req.body);
        res.status(201).json({msg: "Cost Submitted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getCosts = async(req, res) =>{
    try {
        const response = await Cost.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getCostById = async(req, res) =>{
    try {
        const response = await Cost.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// export const deleteUser = async(req, res) =>{
//     try {
//         await User.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
// export const createCost = async(req, res) =>{
//     try {
//         await User.create(req.body);
//         res.status(201).json({msg: "User Created"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
export const updateCost = async(req, res) =>{
    try {
        await Cost.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteCost = async(req, res) =>{
    try {
        await Cost.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

// export const createCost = async(req, res) =>{
//     try {
//         await User.create({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Cost Submited"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const deleteUser = async(req, res) =>{
//     try {
//         await User.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }