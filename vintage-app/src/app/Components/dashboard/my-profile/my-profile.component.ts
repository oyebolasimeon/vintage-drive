import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  name = localStorage.getItem('name');
  email = localStorage.getItem('email')
  role = localStorage.getItem('role')
  

  ngOnInit(): void {
  }

}
