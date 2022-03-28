import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Intern } from 'src/app/models/intern';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-edit-intern',
  templateUrl: './edit-intern.component.html',
  styleUrls: ['./edit-intern.component.scss'],
})
export class EditInternComponent implements OnInit {
  name: string = '';
  age: string = '';
  dateOfBirth: string = '';
  form: FormGroup;
  parameterValue: string;
  constructor(
    private internService: InternService,
    private _activationRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activationRoute.params.subscribe((parameter) => {
      this.parameterValue = this._activationRoute.snapshot.paramMap.get('id');
    });
    this.internService.getIntern(this.parameterValue).subscribe((intern: Intern) => {
      this.name = intern.name;
      this.age = intern.age;
      this.dateOfBirth = intern.dateOfBirth;
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl(''),
      dateOfBirth: new FormControl('', [Validators.required]),
    });
  }
  get name2() {
    return this.form.get('name');
  }

  get age2() {
    return this.form.get('age');
  }

  get dateOfBirth2() {
    return this.form.get('dateOfBirth');
  }

  async editIntern(): Promise<void> {
    const intern: Intern = {
      id: this.parameterValue,
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
    };
    this.internService.updateIntern(intern).subscribe();
    await delay(1000);
  }
}
