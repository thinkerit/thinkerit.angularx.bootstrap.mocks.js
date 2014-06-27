describe('angularx.boostrap.mocks', function() {
    describe('ui.bootstrap.modal', function() {
        var modal;

        beforeEach(module('ui.bootstrap.modal'));
        beforeEach(inject(function($modal) {
            modal = $modal;
        }));

        it('assert opened never', function() {
            modal.opened.never();
        });

        it('assert opened once', function() {
            modal.open('x');
            modal.opened.once();
        });

        it('assert opened template', function() {
            modal.open({
                template:'t'
            });
            modal.opened.template('t');
        });

        it('assert opened template url', function() {
            modal.open({
                templateUrl:'u'
            });
            modal.opened.templateUrl('u');
        });

        it('assert opened backdrop', function() {
            modal.open({
                backdrop:'b'
            });
            modal.opened.backdrop('b');
        });

        it('assert opened scope', function() {
            modal.open({
                scope:'s'
            });
            modal.opened.scope('s');
        });
    });
});