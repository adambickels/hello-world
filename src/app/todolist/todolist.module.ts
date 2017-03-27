import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist.component';
import { TodolistHeaderComponent } from './todolist-header/todolist-header.component';
import { TodolistMainComponent } from './todolist-main/todolist-main.component';
import { TodolistFooterComponent } from './todolist-footer/todolist-footer.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { TodolistItemComponent } from './todolist-item/todolist-item.component';
import {TodolistService} from "./todolist";

import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports     : [CommonModule, SharedModule],
  providers   : [TodolistService],
  declarations: [
      TodolistComponent,
      TodolistHeaderComponent,
      TodolistMainComponent,
      TodolistFooterComponent,
      TodolistListComponent,
      TodolistItemComponent
  ],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
