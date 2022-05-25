import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: Todo[];
  
  getNewId(): number {
    return this.toDoList.length > 0 ? Math.max(...this.toDoList.map(item => item.id)) + 1 : 1;
  }

  constructor() {
      this.toDoList = [
        {
          id: 1,
          title: 'Learn Angular',
          completed: false
        },
        {
          id: 2,
          title: 'Get a job',
          completed: false
        },
        {
          id: 3,
          title: 'Marriage',
          completed: false
        },
      ]
   }

  
  
}
