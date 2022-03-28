import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() emitSearchString = new EventEmitter<string>();
  searchString:string;
  constructor() { }

  ngOnInit(): void {
  }

  searchFilter(){
    console.log("On click:" + this.searchString)
    this.emitSearchString.emit(this.searchString);
  }
}
