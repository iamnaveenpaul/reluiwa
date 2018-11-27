import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss','../../sass/_hacks.scss']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("header").style.backgroundColor = "#eeeeeed4";
    document.querySelector("header").style.paddingBottom = "10px";
  }

}
