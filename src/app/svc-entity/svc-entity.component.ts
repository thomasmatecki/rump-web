import {Component, OnInit} from '@angular/core';
import {SvcEntity, SvcProperty, Type} from '../model/Svc';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-svc-entity',
  templateUrl: './svc-entity.component.html',
  styleUrls: ['./svc-entity.component.css']
})
export class SvcEntityComponent implements OnInit {


  entity: SvcEntity = new SvcEntity();
  entityGroup: FormGroup;
  propertyArray: FormArray = this.formBuilder.array([]);

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.entity.name = "movies";

    this.entityGroup = this.formBuilder.group({
      properties: this.propertyArray
    });

    if (this.entity.properties.length == 0) {
      this.appendProperty();
    }
  }

  private appendProperty() {
    this.propertyArray.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        dataType: ['', Validators.required]
      })
    );

    this.entity.properties.push(new SvcProperty())
  }

  onAdd() {
    this.appendProperty()
  }

  onSave() {

    this.http.post<SvcEntity>('/api/SvcEntity', this.entity).subscribe(data => {
      // Read the result field from the JSON response.
    });
    /*    if (this.entityGroup.invalid) {
          this.snackBar.open("Looks Like There's An Error!", 'Dismiss');
        } else {
        }
        console.log("Save Pressed");*/
  }
}
