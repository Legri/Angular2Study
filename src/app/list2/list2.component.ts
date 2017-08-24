import { Component } from '@angular/core';
const todos=['javascript','angular2','create app'];
@Component({
    selector: 'component-01',
    template: `<h1>component-02</h1>
    <div>
      <ul>
        <li *ngFor="let todo of todos" >{{todo}}</li>

      </ul>
    </div>`
    
  })
export class List2Component {
    todos=todos;
  }
  