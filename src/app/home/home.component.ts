import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { EbookService } from '../services/ebook.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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

  rajani = true;
  vasant = false;
  gaurav = false;
  venkat = false;
  sunil = false;
  julio = false;

  cxo1 = false;
  cxo2 = false;
  cxo3 = false;
  cxo4 = false;
  cxo5 = false;

  sm1 = false;
  sm2 = false;
  sm3 = false;
  sm4 = false;
  sm5 = false;

  sr1 = false;
  sr2 = false;
  sr3 = false;
  sr4 = false;
  sr5 = false;

  mouseHovering(div) {
    this[div] = true;
  }

  mouseLeft(div) {
    this[div] = false;
  }

  openCxo() {
    this.cxoIsSelected.arrow_box_bottom = true;
    this.managerIsSelected.arrow_box_bottom = false;
    this.repIsSelected.arrow_box_bottom = false;
  }

  openReview(reviewer:string) {
    resetAll(this);
   this[reviewer] = true;
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
