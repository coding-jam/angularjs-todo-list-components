export const TodoFormComponent = {

    selector: 'todoForm',
    template: `
        <form ng-submit="$ctrl.addTodo()">
          <div class="row">
            <div class="col-xs-10">
                <input ref="todoInput" type="text" class="form-control" id="textInput" placeholder="Add Todo..." ng-model="$ctrl.element" autocomplete="off"/>
            </div>
            <div class="col-xs-2">
                <input type="submit" class="btn btn-default" value="Save"/>
            </div>
          </div>
        </form>
    `,
    bindings: {
        onNewElement: '&'
    },
    controller: class TodoFormController {

        /* @ngInject */
        constructor($log) {
            this._console = $log;
        }

        $onInit() {
            this._console.log('TodoForm initialized');
        }

        addTodo() {
            this._console.log('New task: ' + this.element);
            this.onNewElement({$event: this.element});
            this.element = null;
        }
    }

};
