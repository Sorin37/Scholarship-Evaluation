import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { Intern } from 'src/app/models/intern';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {

  name:string="";
  age:string="";
  dateOfBirth:string="";
  form:FormGroup;
  constructor(
    private internService: InternService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      "age": new FormControl(""),
      "dateOfBirth": new FormControl("",[
        Validators.required,
      ])
    });
  }
  get name2() { return this.form.get('name'); }

  get age2() { return this.form.get('age'); }

  get dateOfBirth2() { return this.form.get('dateOfBirth'); }
  async addIntern():Promise<void>{
    const intern:Intern = {
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth
    }
    this.internService.addIntern(intern).subscribe();
    await delay(1000)
  }
}
