import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  // @Input()
  // public parentData;
 @Input('parentData') public myCompany;
 @Output() public childEvent= new EventEmitter();
 public fireEvent(){
   this.childEvent.emit('Milin Shah');
 }

  public name="praveen";
  public siteurl= window.location.href;
  public current_time= new Date();
  public myId="testId";
  public isDisabled=false;
  public  success_class="text-success";
  public hasErr=true;
  public isSpecial=true;
  public isSuccess=true;
  public greetings="";
  public greetings2="";
  public yourName="";
  public display_hii=false;
  public display_bye=true;
  public your_color="";

  public colors=["red","green","blue","black"];

  public messageClass={
    "text-success": this.isSuccess,
    "text-special":  this.isSpecial
  };
  public myColor="blue";
  public onClick(){
    console.log("submitted successfully");
    this.greetings="Welcome to stackroute";
    console.log(event);
  }
  greetuser(){
    return "time is "
  }

  public logMessage(value){
    console.log(value);
    this.name=value.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
