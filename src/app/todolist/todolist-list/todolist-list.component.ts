import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.less']
})
export class TodolistListComponent {
  @Input() items: Item[];
}
