import {Component, Input, OnInit} from '@angular/core';

import {SvcProperty, Type} from '../model/Svc';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-svc-property',
  templateUrl: './svc-property.component.html',
  styleUrls: ['./svc-property.component.css']
})
export class SvcPropertyComponent implements OnInit {

  @Input() property: SvcProperty;
  @Input() formGroup: FormGroup;

  propTypes = [
    {value: Type.Integer, viewValue: "Integer"},
    {value: Type.Float, viewValue: "Float"},
    {value: Type.String, viewValue: "String"}
  ];

  constructor() {

  }

  ngOnInit() {
    // this.formGroup = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   dataType: ['', Validators.required]
    // });
  }
}
