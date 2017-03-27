import {AfterContentInit, AfterViewInit, Component, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {TodolistService} from "./todolist";
import {TodolistMainComponent} from "./todolist-main/todolist-main.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      
      <app-todolist-header [headerTitle]="title"
                           (itemAdded)="list.addItem($event)">
      </app-todolist-header>
      
      <app-todolist-main>
        <input class="toggle-all" type="checkbox">
        <app-todolist-list [items]="list.items"></app-todolist-list>
      </app-todolist-main>
      
      <app-todolist-footer></app-todolist-footer>
    </section>
  `,
})
export class TodolistComponent implements OnInit,AfterViewInit {

  @ViewChild(TodolistMainComponent) mainComponent;

  public title: string;
  private list: TodolistService;
  private route: ActivatedRoute;

  constructor(
      list: TodolistService,
      route:ActivatedRoute) {
    this.route = route;
    this.title = "TODOS";
    this.list  = list;
  }
  ngAfterViewInit(): void {
    this.route.queryParams.subscribe( p => console.log(p))

  }

  ngOnInit() {
  }

}
