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
                        <button class="pull-right btn btn-default" ng-click="$ctrl.onDone({$event: todo})" ng-show="!todo.done">
                            Done
                        </button>
                        <button class="pull-right btn btn-default" ng-click="$ctrl.onUndone({$event: todo})" ng-show="todo.done">
                            Redo
                        </button>
                    </td>
                </tr>
            </table>
        </div>`,
    bindings: {
        todos: '<',
        onDone: '&',
        onUndone: '&'
    },
    controller: class TodoListController {

        /* @ngInject */
        constructor($log, $element) {
            this._console = $log;
            this._console.log($element);
        }

        $onInit() {
            this._console.log('TodoList initialized');
        }

        $onChanges(changedObj) {
            this._console.log('Changes detected in TodoList from parent component: ' + JSON.stringify(changedObj));
        }

        $postLink() {
            this._console.debug(arguments);
        }
    }

};
