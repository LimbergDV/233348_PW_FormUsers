import { Component } from '@angular/core';
import { UserService } from '../services/services';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    )
    }
   
    selectedUser: IUser = {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    }

    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website']
    users: IUser[]= []

  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => {
        this.users= response
        console.log(this.users)
      }
    )

  }

  addUser(user: IUser): void{
    //se ocuapa para poder pushear a la tabla los datos que se añadiran 
    this.users.push({...user});
    console.log(this.users);
  }

}