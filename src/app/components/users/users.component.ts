import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'; 

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  data: any;
  
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is invalid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      //this.users.unshift(value);
      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
