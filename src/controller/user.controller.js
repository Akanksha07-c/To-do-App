import { asyncHandler } from "../../../../file2/coffee-and-backend/src/utils/asyncHandler.js";
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "This is user controller of backend"
    })
})

export{
    registerUser
}

