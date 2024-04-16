import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TASK, USER } from '../../interfaces/generals.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  user: USER = {
    username: '',
    password: ''
  }

  tasks: any;

  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required,]),
  });

  get name() {
    return this.taskForm.controls['name'];
  }
  constructor(
    public usersService: UserService,
    public taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.user = this.usersService.userLogged$.value;
  }

  addTask() {
    const task: TASK = {
      name: this.taskForm?.value?.name || '',
      isChecked: false
    }

    this.taskService.setTask = task;
    this.taskForm.controls['name'].setValue('');
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.tasks$.value;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleCheck(index: number) {
    this.tasks[index].isChecked = !this.tasks[index].isChecked;
  }

}
