import Bike from "../interfaces/bike.interface";

export interface BikeDTO extends Omit<Bike, "id"> {}
