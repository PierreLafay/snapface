import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    const interval$=interval(1000);

    interval$.subscribe(value => console.log(value));

    setTimeout(() => {
      interval$.subscribe(value => console.log(value));
    }, 3000);  }

}
