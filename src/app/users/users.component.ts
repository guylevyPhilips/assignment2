import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username = '';
  userEnteredText = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateUserName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username != ''){
      this.userEnteredText = true;
    }
  }

  onClickButton(){
    this.username = ''
    this.userEnteredText = false;
  }

}
