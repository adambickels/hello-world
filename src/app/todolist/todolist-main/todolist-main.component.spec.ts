import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistMainComponent } from './todolist-main.component';

describe('TodolistMainComponent', () => {
  let component: TodolistMainComponent;
  let fixture: ComponentFixture<TodolistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
