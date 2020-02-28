import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-salesops',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss','../home/home.component.scss','../../sass/_hacks.scss']
})
export class SalesAiComponent implements OnInit {

  name = 'all';
  radioSelected: any;

  enum_details = [
    {val: 'all',name: 'All Resources'},
    {val: 'stud',name: 'Case Studies'},
    {val: 'use',name: 'Use Case'},
    {val: 'white',name: 'White Paper'},
    {val: 'playbook',name: 'Playbook'},
    // {val: 'sales',name: 'Sales Stories'},
    {val: 'blog',name: 'Blog Articles'}];

  allResources = [{
    order: 13,
    title: "Sales AI",
    header: "PLAYBOOK",
    img: "assets/hero/img_playbook.png",
    sub: 'The most powerful application of Artificial Intelligence in Sales.',
    link: '/sales-ai-ebook?type='
  },{
    order: 14,
    title: "SALES Coaching ",
    header: "PLAYBOOK",
    img: "assets/hero/img_playbook.png",
    sub: "How to differentiate between good and bad sales professionals.",
    link: '/sales-ai-ebook?type='
  },{
    order: 8,
    title: "Sales Forecasting",
    header: "WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Just having a CRM which is used as a data repository is no longer an option.",
    link: '/white-paper?type='
  },{
    order: 9,
    title: "AI For Sales Forecasting",
    header: "WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "How you can use AI for sales forecasting.",
    link: '/white-paper?type='
  },{
    order: 10,
    title: "Good to Great CRM",
    header: "WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Good CRMs can help you manage sales, Great CRMs can help exceed sales targets.",
    link: '/white-paper?type='
  },{
    order: 11,
    title: "Sales AI becomes Reality",
    header: "WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Have you ever had a wonderful sales dream and woke up smiling?",
    link: '/white-paper?type='
  },{
    order: 12,
    title: "Practical Use of AI in Sales",
    header: "WHITEPAPER",
    img: 'assets/hero/img_whitepaper.png',
    sub: "Learn how AI is helping change the sales landscape",
    link: '/white-paper?type='
  },{
    order: 3,
    title: "Relatas for Sales Leaders",
    header: "USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Sales leadership uses Artificial Intelligence in Sales with Relatas",
    link: '/use-cases?type='
  },{
    order: 4,
    title: "Relatas for Sales Reps",
    header: "USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Sales reps use Artificial Intelligence in Sales with Relatas",
    link: '/use-cases?type='
  },{
    order: 5,
    title: "EXCEL to Realtime forecast",
    header: "USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Excel your sales forecast call with Relatas",
    link: '/use-cases?type='
  },{
    order: 6,
    title: "Deal Rooms",
    header: "USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Explore deal rooms to bring all your client facing group together",
    link: '/use-cases?type='
  },{
    order: 7,
    title: "No-Data-Entry CRM",
    header: "USE CASE",
    img: "assets/hero/img_usecase.png",
    sub: "Learn how Relatas No-Data-Entry CRM works",
    link: '/use-cases?type='
  },{
    order: 1,
    title: "iValue",
    header: "CASE STUDY",
    img: "assets/hero/img_casestudies.png",
    sub: "Our team members are now able to manage their client relationships better which helps them close deals faster",
    link: '/case-studies?type=',
    who: "Sunil Pillai,",
    company: "Chairman, iValue"
  },{
    order: 2,
    title: "22by7",
    header: "CASE STUDY",
    img: "assets/hero/img_casestudies.png",
    sub: "Relatas gives our sales rep and leadership a unique view into the forecast with in-depth visibility",
    link: "/case-studies?type=",
    who: "Venkat Murthy,",
    company: "CEO, 22by7",
  },{
    order: 15,
    title: "Why we built Relatas\n",
    header: "BLOG\n",
    img: "assets/hero/img_ebook.png",
    sub: "",
    link: 'https://blog.relatas.com/'
  },{
    order: 16,
    title: "How to get accurate Sales Forecast\n",
    header: "BLOG\n",
    img: "assets/hero/img_ebook.png",
    sub: "",
    link: 'https://blog.relatas.com/'
  },{
    order: 17,
    title: "Your Customers are your best sales people\n",
    header: "BLOG\n",
    img: "assets/hero/img_ebook.png",
    sub: "",
    link: 'https://blog.relatas.com/'
  }];

  resources = [];

  constructor() { }

  ngOnInit() {
    document.querySelector("header").style.paddingBottom = "10px";

    if(checkContains(window.location.href,"sales-ai")){
      this.radioSelected = 'sales'
      this.radioFun();
    } else if(checkContains(window.location.href,"white")){
      this.radioSelected = 'white'
      this.radioFun();
    } else if(checkContains(window.location.href,"studies")){
      this.radioSelected = 'stud'
      this.radioFun();
    } else if(checkContains(window.location.href,"use")){
      this.radioSelected = 'use'
      this.radioFun();
    } else if(checkContains(window.location.href,"playbook")){
      this.radioSelected = 'playbook'
      this.radioFun();
    } else {
      this.radioSelected = 'all'
      this.loadResources(null);
    }
  }

  loadResources(type:any){
    this.resources = this.allResources.sort((n1,n2) => n1.order - n2.order);
  }

  radioFun() {

    var self = this;
    if(this.radioSelected == 'all'){
      this.loadResources(null);
    } else {
      this.resources = this.allResources.filter(function(el:any){
        return _.includes(el.header.toLowerCase( ),self.radioSelected);
      })
    }
  }

  goToPage(obj:any){
    console.log(obj);
  }

}

function checkContains(string,substring) {
  return string.indexOf(substring) !== -1
}
