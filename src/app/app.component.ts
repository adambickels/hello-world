import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">login</a>  
    <a routerLink="list">list</a>
    
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'app works!';
}