import { Component, Input } from "@angular/core";

@Component({
moduleId:module.id,
selector:"counter-hostbtn",
templateUrl:"counter-host.component.html",
inputs:["name"]
})
export class CounterHostComponent{
    name:string = "default name";
    @Input()
    counterValue:number =0;

    @Input("step")
    counterStep:number =1;
    @Input("decr")
    decr:number=1;
    increment(){
       
     this.counterValue= this.counterValue+this.counterStep;

    }
    decrement(){
        if (this.counterValue<=0){
            this.counterValue=0;
           }
           else
            this.counterValue= this.counterValue-this.decr;
    }
    incrementPlz(counterValue2){
        this.counterValue= counterValue2;
       }
}
