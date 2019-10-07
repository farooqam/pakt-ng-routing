import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todo[];
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }
}
