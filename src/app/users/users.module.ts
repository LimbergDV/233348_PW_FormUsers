import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    EditUserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
