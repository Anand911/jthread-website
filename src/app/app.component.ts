import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'new-app';
  companyName='Jthread';
  students=[
    {name:"Gokul",
      age:22},
    {
      name:"Sanath",
      age:23
    }
  ]
  student={
    name:"Anand",
    age:22,
  };

  handleClick() {
    this.student.age+=1
    console.log("Clicked,,,");
    
  }
}
