import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../footer/footer.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;

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
  }

}
