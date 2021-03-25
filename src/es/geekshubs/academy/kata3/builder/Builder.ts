import { Animal } from "../model/animal/Animal";
import { AnimalImpl } from "../model/animal/AnimalImpl";
import { HorseImpl } from "../model/horse/HorseImpl";
import { SnakeImpl } from "../model/snake/SnakeImpl";

export class Builder {

  list = new Array<Animal>()

    constructor() {
        this.list.push(new HorseImpl("Horse-1"));
        this.list.push(new AnimalImpl("Animal-1"));
        this.list.push(new SnakeImpl("Snake-1"));
        this.list.push(new HorseImpl("Horse-2"));
        this.list.push(new AnimalImpl("Animal-2"));
        this.list.push(new SnakeImpl("Snake-2"));
        this.list.push(new HorseImpl("Horse-3"));
        this.list.push(new SnakeImpl("Snake-3"));
        this.list.push(new AnimalImpl("Animal-3"));
        this.list.push(new HorseImpl("Snake-4"));
    }

      
    
    getList() : Array<Animal> {
        return this.list;
    }
}