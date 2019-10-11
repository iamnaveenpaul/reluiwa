import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './salesRep.component.html',
  styleUrls: ['./salesRep.component.scss','../../sass/_hacks.scss']
})
export class SalesRepComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
