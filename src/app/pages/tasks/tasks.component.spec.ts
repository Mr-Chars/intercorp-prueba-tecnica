import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { TASK } from '../../interfaces/generals.interface';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getTasks', () => {
    const task: TASK = {
      name: '',
      isChecked: false
    }

    component.taskService.setTask = task;
    component.getTasks();
    expect(component.tasks.length).toBe(1);
  });

  it('should removeTask', () => {
    component.tasks = [{
      name: '',
      isChecked: false,
    }]
    component.removeTask(0);
    expect(component.tasks.length).toBe(0);
  });

  it('should toggleCheck', () => {
    component.tasks = [{
      name: '',
      isChecked: false,
    }]
    component.toggleCheck(0);
    expect(component.tasks[0].isChecked).toBeTruthy();
  });

  it('should toggleCheck', () => {
    component.taskForm.controls['name'].setValue('new task');
    component.addTask();
    expect(component.taskService.tasks$.value[0].name).toBe('new task');
  });

  it('should validateNameTask', () => {
    component.taskForm.controls['name'].setValue('new task');
    component.validateNameTask();
    expect(component.nameSearched).toBe('new task');
  });

  it('should validateNameTask 2', () => {
    component.taskForm.controls['name'].setValue('new___sk');
    component.validateNameTask();
    expect(component.nameSearched).toBe('');
  });
});
