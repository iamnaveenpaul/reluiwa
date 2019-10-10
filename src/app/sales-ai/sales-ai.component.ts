import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesops',
  templateUrl: './sales-ai.component.html',
  styleUrls: ['./sales-ai.component.scss','../home/home.component.scss','../../sass/_hacks.scss']
})
export class SalesAiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("header").style.backgroundColor = "#eeeeeed4";
    document.querySelector("header").style.paddingBottom = "10px";
  }

  rajani = true;
  vasant = false;
  gaurav = false;
  venkat = false;
  sunil = false;
  julio = false;

  openReview(reviewer:string) {
    resetAll(this);
    this[reviewer] = true;
  }

  'one' = true;
  'two' = false;
  'three' = false;
  'four' = true;
  'five' = false;
  'six' = false;
  'seven' = true;
  'eight' = false;
  'nine' = false;

  openImage(reviewer:string) {
    resetAllImages(this);
    this[reviewer] = true;
  }

  openImageTwo(reviewer:string) {
    resetAllImagesTwo(this);
    this[reviewer] = true;
  }

  openImageThree(reviewer:string) {
    resetAllImagesThree(this);
    this[reviewer] = true;
  }

}

function resetAll(scope) {
  scope.rajani = false;
  scope.vasant = false;
  scope.gaurav = false;
  scope.venkat = false;
  scope.sunil = false;
  scope.julio = false;
}

function resetAllImages(scope) {
  scope.one = false;
  scope.two = false;
  scope.three = false;
}

function resetAllImagesTwo(scope) {
  scope.four = false;
  scope.five= false;
  scope.six= false;
  ;
}

function resetAllImagesThree(scope) {
  scope.seven= false;
  scope.eight= false;
  scope.nine= false;
}
