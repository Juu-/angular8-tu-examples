import {Component, OnInit} from '@angular/core';
import {MonServiceService} from './services/mon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular8-tu-examples';

  constructor(private service: MonServiceService) {
  }

  ngOnInit(): void {
    this.service
      .getUsers()
      .subscribe(value => console.log(value));
  }
}
