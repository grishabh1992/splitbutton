import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * @title Basic button-toggles
 */
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html',
  styleUrls: ['button-toggle-overview-example.css'],
})
export class ButtonToggleOverviewExample implements OnInit {

  form: any;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'section': [['Section A']],
      'student': [['1']]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      // update change value in parent form control
      console.log(data);
    });
  }
  students = [
    { label : 'St1', value : '1'},
    { label : 'St2', value : '2'},
    { label : 'St3', value : '3'},
     { label : 'St4', value : '4'},
    { label : 'St5', value : '5'}
  ];
  sections = [
    'Section A', 'Section B', 'Section C'
  ]
}
/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */