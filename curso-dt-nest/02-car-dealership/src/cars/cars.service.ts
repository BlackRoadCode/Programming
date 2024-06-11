import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars:Car[] = [
        {
          id: uuid(),
          brand: 'Audi',
          model: 'A3'
        },
        {
          id: uuid(),
          brand: 'BMW',
          model: 'X5'
        },
        {
          id: uuid(),
          brand: 'Mercedes-Benz',
          model: 'C-Class'
        },
        {
          id: uuid(),
          brand: 'Tesla',
          model: 'Model S'
        },
        {
          id: uuid(),
          brand: 'Toyota',
          model: 'Corolla'
        },
        {
          id: uuid(),
          brand: 'Ford',
          model: 'Mustang'
        },
        {
          id: uuid(),
          brand: 'Chevrolet',
          model: 'Camaro'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id:string ){
        const car = this.cars.find( car => car.id === id );
        if (!car) throw new NotFoundException(`Car with id ${ id } not found.`);
        return car;
    }

    create( createCarDto: CreateCarDto ){

      const car:Car = {
        id: uuid(),
        brand: createCarDto.brand,
        model: createCarDto.model
      };

      this.cars.push( car );

      return car;

    }

    update( id: string, updateCarDto: UpdateCarDto ){

      if(  updateCarDto.id && updateCarDto.id !== id )
        throw new BadRequestException(`Car id is not valid inside body`);

      let carDB = this.findOneById( id );

      this.cars = this.cars.map( car => {
        if( car.id === id ){
          carDB = { ...carDB, ...updateCarDto, id }
          return carDB;
        }
        return car;
      });

      return carDB;

    }

    delete( id: string ){
      this.findOneById( id )
      this.cars = this.cars.filter( car => car.id !== id );
      return;
    }
      
}
