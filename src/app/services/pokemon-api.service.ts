import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
  
export class PokemonApiService {
    constructor (private http: HttpClient) { }

    public getPokemonByName(pokemonName: string): any {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).pipe(take(1));
    }

    public getPokemonMovesByName(pokemonMove: string): any {
        return this.http.get(`https://pokeapi.co/api/v2/move/${pokemonMove}`).pipe(take(1));
    }
}