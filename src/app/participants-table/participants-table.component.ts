import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service'
import { Participant } from '../participant';

@Component({
  selector: 'app-participants-table',
  templateUrl: './participants-table.component.html',
  styleUrls: ['./participants-table.component.css']
})
export class ParticipantsTableComponent implements OnInit {

  title : string = "Список учасников";
  participants : Participant[] = [];
  constructor(private _databaseService: DatabaseService) { }

  ngOnInit(): void {
    this._databaseService.getParticipants().subscribe(data => this.participants = data)
  }

}
