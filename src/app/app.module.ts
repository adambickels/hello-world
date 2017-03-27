import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TodolistModule} from "./todolist/todolist.module";
import {LoginModule} from "./login/login.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import 'mimic';

@NgModule({
  imports     : [
    BrowserModule,
    RouterModule.forRoot(routes),
    TodolistModule,
    LoginModule],
  declarations: [AppComponent],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {
    console.log('AppModule instance');
  }
}