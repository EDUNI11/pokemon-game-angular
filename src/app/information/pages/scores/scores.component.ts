import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../../game/services/player.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  //@ts-ignore
  userScores: [string, number][];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.userScores = this.playerService.userScores;
  }

}
