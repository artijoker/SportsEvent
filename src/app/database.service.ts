import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from './participant';
import { Match } from './match'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private _participants_url : string = "./assets/data/participants.json";
  private _matches_url : string = "./assets/data/matches.json";

  private _participants : Participant[] = [
    {
        id : 1,
        country : "Европа",
        name : "G2 Esports"
    },
    {
        id : 2,
        country : "Франция",
        name : "Team Vitality"
    },
    {
        id : 3,
        country : "Европа",
        name : "ENCE"
    },
    {
        id : 4,
        country : "Россия",
        name : "Team Spirit"
    },
    {
        id : 5,
        country : "СНГ",
        name : "Virtus.pro"
    },
    {
        id : 6,
        country : "Албания",
        name : "Bad News Eagles"
    },
    {
        id : 7,
        country : "Бразилия",
        name : "Imperial Esports"
    },
    {
        id : 8,
        country : "США",
        name : "Team Liquid "
    },
    {
        id : 9,
        country : "Дания",
        name : "Astralis"
    },
    {
        id : 10,
        country : "Бразилия",
        name : "MIBR"
    },
    {
        id : 11,
        country : "Россия",
        name : "forZe"
    },
    {
        id : 12,
        country : "США",
        name : "Complexity Gaming"
    },
    {
        id : 13,
        country : "Турция",
        name : "Eternal Fire"
    },
    {
        id : 14,
        country : "Монголия",
        name : "IHC Esports"
    },
    {
        id : 15,
        country : "Аргентина",
        name : "9z Team"
    },
    {
        id : 16,
        country : "Австралия",
        name : "Renegades"
    }

]

  constructor(private _client: HttpClient) { }

  getParticipants() : Observable<Participant[]> {
   
    return this._client.get<Participant[]>(this._participants_url);
  }

  getMatches() : Observable<Match[]> {
    return this._client.get<Match[]>(this._matches_url);
  }



}
