import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  demoRequested = false;
  demoRequestSent = false;

  submitDemoRequest() {
    this.demoRequested = !this.demoRequested;
    this.demoRequestSent = !this.demoRequestSent;
  }

  constructor() { }

  ngOnInit() {
  }

}
