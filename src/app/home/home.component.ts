import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { EbookService } from '../services/ebook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../../sass/_hacks.scss'],
  providers: [EbookService]
})
export class HomeComponent implements OnInit {

  isLoading: boolean;

  constructor(private ebookService: EbookService) { }

  cxoIsSelected = {
    'arrow_box_bottom': true,
    'orange-invert-btn': true
  };

  managerIsSelected = {
    'arrow_box_bottom': false,
    'orange-invert-btn': true
  };

  repIsSelected = {
    'arrow_box_bottom': false,
    'orange-invert-btn': true
  };

  openCxo() {
    this.cxoIsSelected.arrow_box_bottom = true;
    this.managerIsSelected.arrow_box_bottom = false;
    this.repIsSelected.arrow_box_bottom = false;
  }

  openManager() {
    this.managerIsSelected.arrow_box_bottom = true;
    this.cxoIsSelected.arrow_box_bottom = false;
    this.repIsSelected.arrow_box_bottom = false;
  }

  openRep() {
    this.repIsSelected.arrow_box_bottom = true;
    this.managerIsSelected.arrow_box_bottom = false;
    this.cxoIsSelected.arrow_box_bottom = false;
  }

  ngOnInit() {
    this.isLoading = true;
    // this.ebookService.registerAndDownloadEbook().subscribe(
    //   data => { console.log(data); },
    //   err => console.error(err), () => console.log('done'));
  }

}
