import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-function',
  templateUrl: './event-function.component.html',
  styleUrls: ['./event-function.component.css']
})
export class EventFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayVal1='';
  getValue1(value:string){
    //console.log(value);
    //this.isShowData=true;
    this.displayVal1=value
  }

}
