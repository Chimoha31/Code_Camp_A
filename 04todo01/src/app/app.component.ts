import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  // Create Todo
  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.todoContent = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Please enter Todo');
    }
  }

  // Done Todo
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  // Delete Todo
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
