import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  userName: string = 'LE HERO';
  userFirstName: string = 'Toto';
  userEmail: string = 'toto@toto.com';

  onSubmitForm(form: NgForm ) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
}
