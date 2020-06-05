import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {
 form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      Name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]),
      Email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50)])
    });
  }

  ngOnInit() {}
}
