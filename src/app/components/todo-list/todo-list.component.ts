import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoTitle: string;

  constructor(public todo: TodoService) {}

  ngOnInit() {}

  addTodo() {
    console.log(this.todoTitle);
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    const newTodo: Todo = {
      id: this.todo.getNewId(),
      title: this.todoTitle,
      completed: false,
    };
    this.todo.toDoList.push(newTodo);
    this.todoTitle = '';
  }

  removeTodo(todo: Todo) {
    this.todo.toDoList = this.todo.toDoList.filter(
      (item) => item.id !== todo.id
    );
  }
}
