import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss','../../sass/_hacks.scss']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
