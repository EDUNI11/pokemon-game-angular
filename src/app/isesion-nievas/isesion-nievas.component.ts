import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../game/services/player.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-isesion-nievas',
  templateUrl: './isesion-nievas.component.html',
  styleUrls: ['./isesion-nievas.component.css']
})
export class IsesionNievasComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) { }
  actualizarScore() {
    const jugador = document.getElementById("jugador") as HTMLInputElement;
    const puntos = document.getElementById("puntos") as HTMLInputElement;

    if (jugador && puntos) {
      const scoreToAdd = parseInt(puntos.value);
      if (!isNaN(scoreToAdd)) {
        this.playerService.establecer(this.playerService.score + scoreToAdd);
      }
    }
  }


  ngOnInit(): void {
  }

}
