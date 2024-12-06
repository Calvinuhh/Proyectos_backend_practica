import { Request, Response } from "express";
import { getOrderService } from "../services/orderService";

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).send("Solo valido para personas con jwt");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
