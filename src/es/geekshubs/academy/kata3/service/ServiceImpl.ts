import { Builder } from "../builder/Builder";
import { Animal } from "../model/animal/Animal";
import { Repository } from "../repository/Repository";
import { RepositoryImpl } from "../repository/RepositoryImpl";
import { Service } from "./Service";

export class ServiceImpl implements Service {
 
    constructor(public repository: Repository) {
    }

    get(index:number) : Animal{
        return this.repository.getList()[index];
    }

    put(animal: Animal) : number {
        return this.repository.getList().push(animal);
    }

    shift() : Animal {
        return this.repository.getList().shift()!;
    }

    pop() : Animal {
        return this.repository.getList().pop()!;
    }
}