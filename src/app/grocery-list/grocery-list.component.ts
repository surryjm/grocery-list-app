import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
  //styleUrls: ['../../assets/bootstrap/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {
  
  task = {
    name: '',
    id: 0
  };
  tasks = [];

  //Add task
  onClick() {
   if(this.task.id == 0){
     this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike: false});
   }
   this.task = {
     name: '',
     id: 0
   };
  }

  //Edit task
  onEdit(item){
    this.task = item;
  }

  //Delete task
  deleteTask(task){
    for(let i=0; i<= this.tasks.length; i++){
      if(task==this.tasks[i]){
        this.tasks.splice(i,1)
      }
    }
  }

  //Strikethrough task
  onStrike(item){
    for(var i = 0; i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
