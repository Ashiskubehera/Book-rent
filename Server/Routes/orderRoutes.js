import express from "express";
import asyncHandler from "express-async-handler"
import protect from "../Middleware/AuthMiddleware.js";

const orderRouter = express.Router()

// LOGIN
orderRouter.post("/",protect, asyncHandler(
    async (req, res) => {
        const { orderItems, shippingAddress, paymentMethod, monthlyPrice, taxPrice, payingMonthlyPrice } = req.body

        if (orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error("No order items")
            return
        }else{
            const order = new Order({
                orderItems, user:req.user._id, shippingAddress, paymentMethod, monthlyPrice, taxPrice, payingMonthlyPrice
            })
            const createOrder = await order.save()
            res.status(201).json(createOrder)
        }

    }
));


export default orderRouter;