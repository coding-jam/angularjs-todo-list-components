import mainCtrl from 'components/main/main-controller';

describe('Main controller', () => {
    let ctrl;
    let scope;

    beforeEach(angular.mock.module('angularjs-todo-list-components'));

    beforeEach(inject(($controller, $rootScope) => {
        scope = $rootScope.$new();

        ctrl = $controller(mainCtrl, {
            $scope: scope
        });
    }));

    it('should set application name on controller', () => {
        expect(ctrl.applicationName).toEqual('angularjs-todo-list-components')
    });
});
