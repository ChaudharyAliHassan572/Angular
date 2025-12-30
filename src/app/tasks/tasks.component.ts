import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required: true}) userId!:string;
 @Input({required: true}) name!: string;
 isaddingTask=false;
 

 constructor(private tasksService: TasksService){
 }

 get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
 }
  onStartAddTask()
  {
    this.isaddingTask=true; 
  }
  onCloseAddTask(){
    this.isaddingTask=false; 
  }
  // onAddTask(taskData: NewTaskData){ 
    
  //   this.isaddingTask=false; 
  // }
}
