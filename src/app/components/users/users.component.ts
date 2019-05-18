import { Component, OnInit, ViewChild } from '@angular/core';

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
  
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@test.com',
        isActive: true,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Vicki',
        lastName: 'Plumis',
        email: 'vicki@test.com',
        isActive: true,
        registered: new Date('11/02/2016 12:30:00'),
        hide: true
      }
    ];

      this.loaded = true;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is invalid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
