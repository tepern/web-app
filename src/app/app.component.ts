import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {
  
  users: User[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit() {

     this.configService.getConfig().then(data => this.users = data);

  }

  addUser() {
      
      this.users.push(new User());
      
  }

}
