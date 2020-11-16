import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop';
  //animals:String[];
  animals = ['dog', 'cat'];

   randAnimal = this.animals[1];
}
