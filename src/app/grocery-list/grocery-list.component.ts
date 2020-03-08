import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
  //styleUrls: ['../../assets/bootstrap/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {
  
  task: string;
  tasks = [];

  //Add task
  onClick() {
   this.tasks.push({name: this.task});
    this.task = '';
  }


  //Delete task
  deleteTask(task){
    for(let i=0; i<= this.tasks.length; i++){
      if(task==this.tasks[i]){
        this.tasks.splice(i,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
