import express from "express";
import asyncHandler from "express-async-handler"
import protect from "../Middleware/AuthMiddleware.js";
import User from "../Models/UserModel.js";
import generateTocken from "../utils/generateToken.js";

const userRouter = express.Router()

// LOGIN
userRouter.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateTocken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(401)
            throw new Error("Invalid Email or Password");
        }

    }
));

// REGISTER
userRouter.post("/",
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body

        const userExist = await User.findOne({ email });

        if (userExist) {
            res.status(400)
            throw new Error("User already exist")
        }
        const user = await User.create({
            name,
            email,
            password
        })
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateTocken(user._id),
            })
        }
        else {
            res.status(400)
            throw new Error("Invalid User Data")
        }
    })
);

// PROFILE
userRouter.get("/profile", protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,

            })
        } else {
            res.status(404)
            throw new Error("User Not Found");
        }
    })
);

// UPDATE PROFILE
userRouter.put("/profile", protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if (req.body.password) {
                user.password = req.body.password
            }
            const updatedUser = await user.save()
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                createdAt: updatedUser.createdAt,
                token: generateTocken(updatedUser._id),
            })
        } else {
            res.status(404)
            throw new Error("User Not Found");
        }
    })
);

export default userRouter;