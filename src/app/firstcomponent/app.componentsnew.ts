import { Component } from '@angular/core';
const todos=['javascript','angular2','create app'];
@Component({
    selector: 'my-appnew',
    template: `<h1>Hello worldNew</h1>
    <div>
      <ul>
        <li *ngFor="let todo of todos" >{{todo}}</li>

      </ul>
    </div>`
    
  })
export class AppComponentNew {
    todos=todos;
  }
  