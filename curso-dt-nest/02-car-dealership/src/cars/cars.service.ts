import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
          id: 1,
          brand: 'Audi',
          model: 'A3'
        },
        {
          id: 2,
          brand: 'BMW',
          model: 'X5'
        },
        {
          id: 3,
          brand: 'Mercedes-Benz',
          model: 'C-Class'
        },
        {
          id: 4,
          brand: 'Tesla',
          model: 'Model S'
        },
        {
          id: 5,
          brand: 'Toyota',
          model: 'Corolla'
        },
        {
          id: 6,
          brand: 'Ford',
          model: 'Mustang'
        },
        {
          id: 7,
          brand: 'Chevrolet',
          model: 'Camaro'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id:number ){
        const car = this.cars.find( car => car.id === id );
        if (!car) throw new NotFoundException(`Car with id ${ id } not found.`);
        return car;
    }
      
}
