import { Component, OnInit } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  interval$!: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      map( value=> value*10)
    );
  }

}
