import { JwtPayload, sign, verify } from "jsonwebtoken";

process.loadEnvFile();
const { JWT_SECRET } = process.env as { JWT_SECRET: string };

export const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });

  return jwt;
};

export const verifyToken = (jwt: string): string | JwtPayload => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
