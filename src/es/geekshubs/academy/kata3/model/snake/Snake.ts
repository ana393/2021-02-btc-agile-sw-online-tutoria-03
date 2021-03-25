import { AnimalExt } from "../animal/AnimalExt";

export interface Snake extends AnimalExt{
    move() : string;
}