import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: 'Nouvel Objet',
      description: 'Description de l\'objet',
      imageUrl: 'http://www.test.com',
      location: 'Paris',
      price: 12
    });
  }
  onSubmitForm() {
    console.log(this.snapForm.value);
  }
}
