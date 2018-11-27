import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss','../../sass/_hacks.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("header").style.backgroundColor = "#eeeeeed4";
    document.querySelector("header").style.paddingBottom = "10px";
  }

}
