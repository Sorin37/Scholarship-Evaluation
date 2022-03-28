import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchString: string;
  constructor() { }

  ngOnInit(): void {
  }
  
  receiveSearchString(searchString: string) {
    this.searchString = searchString;
  }
}
