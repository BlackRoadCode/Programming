import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {

  constructor( 
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon> 
  ){}

  private readonly axios:AxiosInstance = axios;
  
  async executeSeed() {

    const numPokemones = 1;
    const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${ numPokemones }`);
    // const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${ numPokemones }&offset=${ numPokemones }`);

    data.results.forEach( ({ name, url }) => {
      const segments = url.split('/');
      const no:number = +segments[ segments.length - 2 ];

      this.pokemonModel.create({ name, no });

    });

    return 'Seed executed';

  }

}
