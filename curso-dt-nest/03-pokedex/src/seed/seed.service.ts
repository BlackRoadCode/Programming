import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor( 
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}
  
  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const numPokemones = 650;
    const data = await this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${ numPokemones }`);
    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach( async ({ name, url }) => {
      const segments = url.split('/');
      const no:number = +segments[ segments.length - 2 ];
      pokemonToInsert.push( { name, no } ); 
    });

    this.pokemonModel.insertMany( pokemonToInsert );
    return 'Seed executed';
  }

}
