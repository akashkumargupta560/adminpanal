import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpanal';
  showData(){
    return "Angular Tutorial";
   }
   count=0;
   counterplus(){
    this.count++;
   }
   counterneg(){
    this.count--;
   }
   counts=0;
   counter(type:string){
    type==='plus'?this.counts++:this.counts--;
   }


  
}
