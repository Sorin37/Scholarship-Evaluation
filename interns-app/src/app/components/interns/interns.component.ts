import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/models/intern';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss']
})
export class InternsComponent implements OnInit {
  interns:Intern[]
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
  constructor(private internService: InternService) { }

  ngOnInit(): void {
    this.internService.getInterns().subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
  }

}
