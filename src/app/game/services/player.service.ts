import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _score: number = 0;
  private _lifes: number = 0;
  private _highScore: number = 0;
  private _userScores: Map<string, number> = new Map();

  get score(): number {
    return this._score;
  }

  establecer(value: number) {
    this._score = value;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) {
    this._highScore = parseInt(localStorage.getItem('highscore') || '0');
    console.log(this._highScore);
    // console.log(Number(localStorage.getItem('highScore')))
  }

  resetGame() {
    this._score = 0;
    this._lifes = 5;
  }

  increasePoints() {
    this._score += 10;
  }

  get userScores(): [string, number][] {
    return Array.from(this._userScores.entries());
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {

      if (this._score > this._highScore) this.newHighScore()

      this._router.navigate(['/game/gameover']);
    }
  }

  newHighScore() {
    this._highScore = this._score;
    localStorage.setItem('highscore', String(this._highScore));
  }

  actualizarPuntuacionUsuario(nombreUsuario: string, puntuacion: number) {
    let puntuacionActual = this._userScores.get(nombreUsuario) || 0;
    this._userScores.set(nombreUsuario, puntuacionActual + puntuacion);
  }

  obtenerPuntuacionUsuario(nombreUsuario: string) {
    return this._userScores.get(nombreUsuario) || 0;
  }

}
