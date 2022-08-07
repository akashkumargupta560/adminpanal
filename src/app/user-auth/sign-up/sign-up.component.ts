import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
//name:string='Akash Gupta';
//email:string='ak@gmail.com';
//password:string='akash@9097';
displayVal='';
isShowData:boolean=false;
  ngOnInit(): void {
  }
  ShowData(){
    this.isShowData=true;
  }
  hideData(){
    this.isShowData = false;
  }
  // displayVal='';
  getValue(value:string){
    //console.log(value);
    this.isShowData=true;
    this.displayVal=value
  }
  color="";
  bgColor="grey";
  updateColor(){
    this.color="white"
    this.bgColor="blue"
  }
   
  datavalue:any={};
  // getData(data:any){
  //   //this.
  //   console.warn(data);
  // }
  getData(data:NgForm){
    this.datavalue=data;
    console.warn(data);
    this.isShowData=true;
  }

}
