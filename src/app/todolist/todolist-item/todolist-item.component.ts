import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.less']
})
export class TodolistItemComponent {
  @Input() item: Item;
}
