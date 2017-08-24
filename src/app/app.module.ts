import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { AppComponentNew } from './firstcomponent/app.componentsnew';
import { CounterComponent } from './counter/counter.component';
import {CounterHostComponent} from "./counter/counter-host.component";
import {NameCardComponent} from "./namecard/name-card.component";
import {NameCardHostComponent} from "./namecard/name-card-host.component";
/**test */
@NgModule({
  
  declarations: [AppComponent,AppComponentNew,List1Component,List2Component,CounterComponent,CounterHostComponent,
    NameCardHostComponent,NameCardComponent],
  imports: [BrowserModule,
    RouterModule.forRoot([
      {path: "list1", component:List1Component},
      {path: "list2", component:List2Component},
      {path: "counter", component:CounterComponent},
      {path: "namecard", component:NameCardHostComponent},
      {path:"",redirectTo:"list1",pathMatch:"full"},
    

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
