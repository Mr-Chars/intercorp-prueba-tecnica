import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TASK, USER } from '../../interfaces/generals.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { REGEX_INPUT_TASK } from '../../constans.ts/generals';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  @ViewChild('nameTask') nameTask!: ElementRef;
  user: USER = {
    username: '',
    password: ''
  }

  tasks: any;

  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(REGEX_INPUT_TASK)]),
  });
  nameSearched = '';

  constructor(
    public usersService: UserService,
    public taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.user = this.usersService.userLogged$.value;
  }

  validateNameTask() {
    const regexp = REGEX_INPUT_TASK;
    const nameTask = this.taskForm?.value?.name || '';

    if (!regexp.test(nameTask)) {
      this.taskForm.controls['name'].setValue(this.nameSearched);
    } else {
      this.nameSearched = nameTask;
    }
  }

  addTask() {
    const task: TASK = {
      name: this.taskForm?.value?.name || '',
      isChecked: false
    }

    this.taskService.setTask = task;
    this.nameTask.nativeElement.blur();
    this.taskForm.controls['name'].reset();
    this.getTasks();
    this.nameSearched = '';
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
