import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSearchString = new EventEmitter<string>();
  @Output() emitSortingMethod = new EventEmitter<string>();
  searchString: string;
  sortingMethod: string;
  constructor() {}

  ngOnInit(): void {}

  searchFilter() {
    this.emitSearchString.emit(this.searchString);
  }
  setSortingMethod() {
    this.emitSortingMethod.emit(this.sortingMethod);
  }
  establishSortingMethod(sortingMethod: string){
    this.sortingMethod=sortingMethod;
    console.log(sortingMethod)
  }
}
