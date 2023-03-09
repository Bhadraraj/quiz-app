import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //store the name 
  startQuiz(name:string){
console.log(name)
 //   localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
