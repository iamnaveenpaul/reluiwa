import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './opsManager.component.html',
  styleUrls: ['./opsManager.component.scss','../../sass/_hacks.scss']
})
export class OpsManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector("header").style.paddingBottom = "10px";
  }

}
