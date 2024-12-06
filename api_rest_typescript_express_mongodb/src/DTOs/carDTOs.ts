import Car from "../interfaces/car.interface";

export interface CarDTO extends Omit<Car, "id"> {}
