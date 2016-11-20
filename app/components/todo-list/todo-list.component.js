import './todo-list.css';

export const TodoListComponent = {

    selector: 'todoList',
    template: `
        <div class="col-xs-12">
            <table class="table" ng-show="$ctrl.todos.length > 0">
                <caption>Count: {{$ctrl.todos.length}}</caption>
                <tr ng-repeat="todo in $ctrl.todos track by $index">
                    <td ng-class="{'task-done': todo.done}">{{todo.id}}</td>
                    <td ng-class="{'task-done': todo.done}">{{todo.text}}</td>
                    <td>
                        <button class="pull-right btn btn-default" ng-click="$ctrl.markDone(todo)" ng-show="!todo.done">
                            Done
                        </button>
                        <button class="pull-right btn btn-default" ng-click="$ctrl.markUndone(todo)" ng-show="todo.done">
                            Redo
                        </button>
                    </td>
                </tr>
            </table>
        </div>`,
    bindings: {
        todos: '<'
    },
    controller: class TodoListController {

        /* @ngInject */
        constructor($log, TodoListService) {
            this._console = $log;
            this._service = TodoListService;
        }

        $onInit() {
            this._console.log('Initial tasks size: ' + this.todos);
        }

        markDone(todo) {
            todo.done = true;
            this._service.update(todo);
        }

        markUndone(todo) {
            todo.done = false;
            this._service.update(todo);
        }
    }

};
