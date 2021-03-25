import { Builder } from './../builder/Builder';
import { SnakeImpl } from './../model/snake/SnakeImpl';
import { AnimalImpl } from './../model/animal/AnimalImpl';
import { Animal } from "../model/animal/Animal";
import { HorseImpl } from '../model/horse/HorseImpl';
import { Repository } from './Repository';

export class RepositoryImpl implements Repository<Animal> {

    constructor(public list: Array<Animal>) {
   }
    getList() : Array<Animal> {
        return this.list;
    }
}