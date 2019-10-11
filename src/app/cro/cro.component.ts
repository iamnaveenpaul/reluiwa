import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './cro.component.html',
  styleUrls: ['./cro.component.scss','../../sass/_hacks.scss']
})
export class CroComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
