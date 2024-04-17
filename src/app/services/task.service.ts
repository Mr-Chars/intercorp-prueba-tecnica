import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TASK } from '../interfaces/generals.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: TASK = {
    name: ''
  }
  public readonly tasks$ = new BehaviorSubject([{}] as Array<TASK>);

  constructor() { }

  get getTask() {
    return this.tasks$.asObservable();
  }

  set setTask(task: TASK) {
    let tasks;

    if (!this.tasks$?.value[0]?.name) {
      tasks = [task];
    } else {
      tasks = [...this.tasks$.value];
      tasks.push(task);
    }
    this.tasks$.next(tasks);
  }
}