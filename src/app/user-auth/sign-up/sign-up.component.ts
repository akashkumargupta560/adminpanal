import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
//name:string='akash Gupta';
//email:string='ak@gmail.com';
//password:string='akash@9097';
displayVal='';
isShowData:boolean=false;
  ngOnInit(): void {
  }
  // ShowData(){
  //   this.isShowData=true;
  // }
  hideData(){
    this.isShowData = false;
  }
  // displayVal='';
  getValue(value:string){
    //console.log(value);
    this.isShowData=true;
    this.displayVal=value
  }
  

}
