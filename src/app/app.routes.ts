import {LoginComponent} from "./login/login/login.component";
import {Routes} from "@angular/router";
import {TodolistComponent} from "./todolist/todolist.component";

export const routes:Routes = [
  {path: '',     component: LoginComponent},
  {
    path     : 'list',
    component: TodolistComponent
  }
    // loadChildren: 'app/todolist/todolist.module.ts#TodolistModule'}
];