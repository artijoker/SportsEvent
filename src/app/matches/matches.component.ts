import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service'
import { Match } from '../match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  title : string = "Результаты матчей";
  matches : Match[] = [];
  constructor(private _databaseService: DatabaseService) { }

  ngOnInit(): void {
    this._databaseService.getMatches().subscribe(data => this.matches = data)
  }
}
