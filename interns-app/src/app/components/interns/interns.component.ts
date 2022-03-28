import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Intern } from 'src/app/models/intern';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss'],
})
export class InternsComponent implements OnInit {
  interns: Intern[];
  colors: string[] = [
    'red',
    'yellow',
    'green',
    'blue',
    'cyan',
    'pink',
    'orange',
    'gray',
  ];

  @Input() searchString: string;
  @Input() sortingMethod: string = 'ascending';
  constructor(private internService: InternService) {}

  ngOnInit(): void {
    this.internService.getInterns().subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
  }
  deleteIntern(id: string) {
    this.internService.deleteIntern(id).subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
    this.internService.getInterns().subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
  }
  ngOnChanges(): void {
    var x = this.internService.getMatchingInterns(this.searchString);
    this.interns = [];
    x.forEach((element) => {
      element.forEach((el) => {
        this.interns.push(el);
      });
    });
    this.interns.sort((a, b) => a.name.localeCompare(b.name));
    if (this.sortingMethod == 'descending') this.interns.reverse();
  }
}
