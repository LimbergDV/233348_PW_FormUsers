import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { UserService } from '../services/services';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']})
export class EditUserFormComponent {

  @Input()user :IUser={
    id: 0,
    name: "",
    username:"",
    email: "",
    phone: "",
    website: ""
  }

  @Input() disabled: boolean = true

  @Output() eventEmitter = new EventEmitter<IUser>()
  
  constructor(private _service: UserService){
    // this._service.get().subscribe(
    //   response => this.user =response
    // )
  }
  mostrar(): void{
    this.eventEmitter.emit(this.user);
    console.log(this.user.name)
    console.log(this.user)
  }

}