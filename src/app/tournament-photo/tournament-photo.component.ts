import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-photo',
  templateUrl: './tournament-photo.component.html',
  styleUrls: ['./tournament-photo.component.css']
})
export class TournamentPhotoComponent implements OnInit {

  private _count : number = 0;

  private _urls: string[] = [
    "./assets/image/01.jpg",
    "./assets/image/02.jpg",
    "./assets/image/03.jpg"
  ]
  
  title:string = "Фото с турнира"
  urlImage:string = this._urls[this._count];

  prevImage = () => {
    this._count = (this._count - 1 + this._urls.length) % this._urls.length;
    this.urlImage = this._urls[this._count];
  }
  nextImage = () => {
    this._count = (this._count + 1) % this._urls.length;
    this.urlImage = this._urls[this._count];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
