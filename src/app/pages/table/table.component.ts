import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {
  users: User[] = [];
  actualUser: User = {
    id: null,
    name: null,
    age: null,
    username: null
  };

  constructor(public _userService: UserService) { }

  ngOnInit(): void {
    this.Get();
  }

  Select(user: User){
    this.actualUser = new User(user.id, user.name, user.age, user.username);
  }

  Get(){
    this._userService.GetUsers().subscribe((resp: any) => {
      this.users = resp.users;
    });
  }

  Create(){
    let newUser = this.actualUser;
    newUser.id = null;
    this._userService.CreateUser(newUser).subscribe(resp => {
      console.log(resp);
    });
    this.Get();
    this.Get();
    this.actualUser = new User(null, null, null, null);
  }

  Update(){
    let upUser = this.actualUser;
    this._userService.UpdateUser(upUser).subscribe(resp => {
      console.log(resp);
    });
    this.Get();
    this.Get();
    this.actualUser = new User(null, null, null, null);
  }

  Delete(){
    let delUser = this.actualUser;
    this._userService.DeleteUser(delUser).subscribe(resp => {
      console.log(resp);
    });
    this.Get();
    this.Get();
    this.actualUser = new User(null, null, null, null);
  }

}
