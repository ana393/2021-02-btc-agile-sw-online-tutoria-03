import { Animal } from "../model/animal/Animal";


export interface Repository<T>{
    getList() : Array<T> ;
}