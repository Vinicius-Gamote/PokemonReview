import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonApiService } from './services/pokemon-api.service';
import { takeUntil } from 'rxjs';
import Swal from "sweetalert2";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokemonApiService, HttpClient]
})
export class AppComponent {
  pokemonName!: string; 
  pokemon!: any;

  constructor(private pokemonService: PokemonApiService) { }

  public searchPokemon(): any {
    const form = document.getElementById('pokemonName') as HTMLInputElement;
    this.pokemonName = form.value;

    this.pokemonService.getPokemonByName(this.pokemonName).subscribe(((response: any) => {
      response = this.pokemon;
    }), ((error: any) => { Swal.fire({
      title: 'Pokemon not found!',
      icon: 'warning',
      confirmButtonColor: '#ff4c06',
      confirmButtonText: 'Ok',
    }
    )}))
  }

}
