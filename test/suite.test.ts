import { RepositoryImpl } from './../src/es/geekshubs/academy/kata3/repository/RepositoryImpl';
import { AnimalImpl } from './../src/es/geekshubs/academy/kata3/model/animal/AnimalImpl';
import { Animal } from '../src/es/geekshubs/academy/kata3/model/animal/Animal';
import { HorseImpl }  from "./../src/es/geekshubs/academy/kata3/model/horse/HorseImpl";
import { SnakeImpl }  from "./../src/es/geekshubs/academy/kata3/model/snake/SnakeImpl";
import { Horse } from '../src/es/geekshubs/academy/kata3/model/horse/Horse';
import { Snake } from '../src/es/geekshubs/academy/kata3/model/snake/Snake';
import { Repository } from '../src/es/geekshubs/academy/kata3/repository/Repository';
import { Builder } from '../src/es/geekshubs/academy/kata3/builder/Builder';
import { ServiceImpl } from '../src/es/geekshubs/academy/kata3/service/ServiceImpl';


describe('Testing', function (){

    test('Animal src name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });
    test('Animal api name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result : Animal = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse src name', function () {
        //Arrange
        var expected = "Horse-1" ;
        //Act
        var result = new HorseImpl("Horse-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });
      test('Horse  api name', function () {
        //Arrange
        var expected = "Galloping...Horse-1 moved 45m.";
        //Act
        var result : Horse = new HorseImpl("Horse-1");
        //Assert
        expect(result.move()).toBe(expected);
    });

    test('Snake src name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new SnakeImpl("Snake-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });
     test('Snake api name', function () {
        //Arrange
        var expected = "Slithering...Snake-1 moved 30m.";
        //Act
        var result : Snake = new SnakeImpl("Snake-1");
        //Assert
        expect(result.move()).toBe(expected);
    });
    test('Repository api generic getList', function () {
        //Arrange
        var expected = new Builder().list;
        //Act
        var result : Repository<Animal> = new RepositoryImpl(new Builder().list);
        //Assert
        expect(result.getList()).toEqual(expected);
    });
     test('Service', function () {
        //Arrange
        var builder = new Builder().list;
        var repository = new RepositoryImpl(new Builder().list);
        var horseExpected = builder[0];
        //Act
        var service = new ServiceImpl(repository);
        var res = service.shift();
        //Assert
        expect(res).toEqual(horseExpected);
    });

});
