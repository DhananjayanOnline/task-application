import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  constructor(private service: TaskService) { }

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>

  taskForm = new FormGroup({
    "task_name": new FormControl("", [Validators.required])
  })

  get task_name() {
    return this.taskForm.get("task_name")
  }

  createTask() {
    this.notify.emit(false)
    let data = this.taskForm.value
    this.service.addTask(data).then((res: any) => res.json()).then(data => {
      console.log("TASK CREATED!!!!")
      this.notify.emit(true)
    }).catch(err => alert(err))

  }

}
