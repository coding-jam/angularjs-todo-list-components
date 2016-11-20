import angular from 'angular';
import TodoListService from './todo-list.service';

angular.module('services', [])
    .service(TodoListService.NAME, TodoListService);
