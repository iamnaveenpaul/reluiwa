import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-salesops',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss','../home/home.component.scss','../../sass/_hacks.scss']
})
export class SalesAiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("header").style.backgroundColor = "#eeeeeed4";
    document.querySelector("header").style.paddingBottom = "10px";

    this.loadResources(null);
  }

  name = 'all';
  radioSelected: any;
  enum_details = [
    {val: 'all',name: 'All Resources'},
    {val: 'white',name: 'White Paper'},
    {val: 'case',name: 'Case Studies'},
    {val: 'use',name: 'Use Case'},
    {val: 'sales',name: 'Sales Stories'},
    {val: 'blog',name: 'Blog'}
  ];

  allResources = [{
    header: "DOWNLOAD SALES AI PLAYBOOK",
    img: "assets/hero/img_playbook.png",
    sub: 'The most powerful application of Artificial Intelligence in Sales.',
    link: '/sales-ai-ebook'
  },{
    header: "DOWNLOAD SALES Coaching PLAYBOOK",
    img: "assets/hero/img_playbook.png",
    sub: "How to differentiate between good and bad sales professionals.",
    link: '/sales-ai-ebook'
  },{
    header: "DOWNLOAD WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Just having a CRM which is used as a data repository is no longer an option.",
    link: '/white-paper'
  },{
    header: "DOWNLOAD WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "How you can use AI for sales forecasting.",
    link: '/white-paper'
  },{
    header: "DOWNLOAD WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Good CRMs can help you manage sales, Great CRMs can help exceed sales targets.",
    link: '/white-paper'
  },{
    header: "DOWNLOAD WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Have you ever had a wonderful sales dream and woke up smiling?",
    link: '/white-paper'
  },{
    header: "DOWNLOAD WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Learn how AI is helping change the sales landscape",
    link: '/white-paper'
  },{
    header: "DOWNLOAD USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Sales leadership uses Artificial Intelligence in Sales with Relatas",
    link: '/use-cases'
  },{
    header: "DOWNLOAD USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Sales reps use Artificial Intelligence in Sales with Relatas",
    link: '/use-cases'
  },{
    header: "DOWNLOAD USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Excel your sales forecast call with Relatas",
    link: '/use-cases'
  },{
    header: "DOWNLOAD USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Explore deal rooms to bring all your client facing group together",
    link: '/use-cases'
  },{
    header: "DOWNLOAD USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Learn how Relatas No-Data-Entry CRM works",
    link: '/use-cases'
  },{
    header: "DOWNLOAD CASE STUDIES",
    img: "assets/hero/img_casestudies.png",
    sub: "Sunil Quote",
    link: '/case-studies'
  },{
    header: "DOWNLOAD CASE STUDIES",
    img: "assets/hero/img_casestudies.png",
    sub: "Venkat Quote",
    link: "/case-studies"
  }];

  resources = [];

  loadResources(type:any){
    this.resources = this.allResources
  }

  radioFun() {
    console.log(this.radioSelected);
    var self = this;
    if(this.radioSelected == 'all'){
      this.loadResources(null);
    } else {
      this.resources = this.allResources.filter(function(el:any){
        return _.includes(el.header.toLowerCase( ),self.radioSelected);
      })
    }
  }



}
