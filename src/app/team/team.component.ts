import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss','../../sass/_hacks.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
