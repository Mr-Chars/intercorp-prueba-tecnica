import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have an empty task', () => {
    const newTask = { name: 'New Task' };
    service.setTask = newTask;
    service.getTask.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]?.name).toBe('New Task');
    });
  });

  it('should set a new task', () => {
    const newTask = { name: 'New Task' };
    service.setTask = newTask;
    expect(service.tasks$.value).toEqual([{ name: 'New Task' }]);
  });

  it('should add a task to existing tasks', () => {
    const existingTasks = [{ name: 'Existing Task' }];
    const newTask = { name: 'New Task' };
    service.tasks$.next(existingTasks);
    service.setTask = newTask;
    service.getTask.subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks[0]?.name).toBe('Existing Task');
      expect(tasks[1]?.name).toBe('New Task');
    });
  });
});
