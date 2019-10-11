import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './salesops.component.html',
  styleUrls: ['./salesops.component.scss','../../sass/_hacks.scss']
})
export class SalesopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
