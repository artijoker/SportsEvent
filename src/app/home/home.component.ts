import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "CS:GO | PGL Major Antwerp 2022";
  series: string = "PGL CS:GO Championship Series";
  location: string = "Антверпен, Бельгия";
  prizeFund: number = 1000000;
  startDate: Date = new Date(2022, 5, 9);
  endDate: Date = new Date(2022, 5, 22);
  constructor() { }

  ngOnInit(): void {
  }

}
