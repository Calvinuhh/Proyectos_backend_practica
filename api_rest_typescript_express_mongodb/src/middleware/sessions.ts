import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwtHandle";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    const jwtByUser = authorization || "";
    const jwt = jwtByUser.split(" ").pop();

    const isUser = verifyToken(`${jwt}`);

    if (!isUser) {
      res.status(401).send("jwt no valido");
    } else {
      next();
    }

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).send({ message: err.message, also: "Sesion no valida" });
  }
};
