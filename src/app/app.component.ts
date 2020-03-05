import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {
  
  users: User[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit() {

     this.configService.getConfig().subscribe(json => this.users = json["users"]);
  }

}
