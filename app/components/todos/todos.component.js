import angular from 'angular';
import {TodoFormComponent} from '../todo-form/todo-form.component';
import {TodoListComponent} from '../todo-list/todo-list.component';

const TodosComponent = {

    selector: 'todos',
    template: `
        <div class="row">
    		<h1 class="text-center">{{$ctrl.title}}</h1>
            <todo-form on-new-element="$ctrl.addNewElement($event)"></todo-form>
            <hr/>
    		<todo-list todos="$ctrl.todoList"></todo-list>
    	</div>
    `,
    controller: class TodosController {

        /* @ngInject */
        constructor($log, TodoListService) {
            this._console = $log;
            this.title = 'TodoApp';
            this._service = TodoListService;
            this._service.getAll()
                .then((todos) => this.todoList = todos);
        }

        $onInit() {
            this._console.log('TODO List initialized');
        }

        addNewElement(todoLabel) {
            const todo = {id: this.todoList.length + 1, text: todoLabel, done: false};
            this._console.log(todo);
            this._service.store(todo)
                .then((t) => {
                    this.todoList.push(t);
                })
                .catch(alert);
        }
    }

};

angular.module('todos', [])
    .component(TodoFormComponent.selector, TodoFormComponent)
    .component(TodoListComponent.selector, TodoListComponent)
    .component(TodosComponent.selector, TodosComponent);


