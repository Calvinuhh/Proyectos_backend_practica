import { Router } from "express";
import { getOrders } from "../../controllers/orderController";
import { checkJwt } from "../../middleware/sessions";

const orderRouter: Router = Router();

orderRouter.get("/", checkJwt, getOrders);

export default orderRouter;
