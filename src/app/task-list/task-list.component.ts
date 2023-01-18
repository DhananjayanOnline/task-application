import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnChanges {

  allTasks:any

  @Input()inpt:boolean=false

  constructor(private service:TaskService){}

  ngOnInit(): void {
      this.service.listTask().then((res:any)=> res.json()).then(data=> this.allTasks=data).catch(err=> alert(err))
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.inpt){
        console.log(this.inpt);
        
        this.service.listTask().then((res:any)=> res.json()).then(data=> this.allTasks=data).catch(err=> alert(err))
      }
  }
}

