import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html',
  styleUrls: ['./todolist-header.component.less']
})
export class TodolistHeaderComponent  {

  public flag:boolean = true;

  constructor() {
    // setTimeout(() => this.flag = true, 5000)
  }

  @ViewChild('head')
  public titleElements:ElementRef;

  @Input()
  public headerTitle: string;

  @Output()
  public itemAdded = new EventEmitter<string>();



}
