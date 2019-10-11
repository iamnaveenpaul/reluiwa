import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss','../../sass/_hacks.scss']
})
export class ErrorComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
