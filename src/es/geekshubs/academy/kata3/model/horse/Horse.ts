import { AnimalExt } from "../animal/AnimalExt";

export interface Horse extends AnimalExt{
    move() : string;
}