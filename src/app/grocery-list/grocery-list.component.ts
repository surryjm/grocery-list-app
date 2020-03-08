import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  //styleUrls: ['./grocery-list.component.css']//
  styleUrls: ['../../assets/bootstrap/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {
  
  task: string;
  /*task = {
    name: '',
    id: 0
  };*/
  tasks = [];

  //Add task
  onClick() {
   this.tasks.push({name: this.task});
    this.task = '';
    /*if(this.task.id == 0){
      this.tasks.push({id: (new Date()).getTime(),name: this.task.name});
    }*/
  }

  /*taskSubmit(value:any){
    if(value!==""){
      this.tasks.push(value.task)
    }
    else{
      alert('Field required')
    }
  }*/


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
