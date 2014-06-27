angular.module('ui.bootstrap.modal', [])
    .factory('$modal', MockModalFactory);

function MockModalFactory() {
    var spy = {
        opened: []
    };

    function assertOpened(field) {
        return function(expected) {
            expect(spy.opened[spy.opened.length - 1][field]).toEqual(expected);
        }
    }

    return {
        opened: {
            never: function () {
                expect(spy.opened.length).toEqual(0);
            },
            once: function () {
                expect(spy.opened.length).toEqual(1);
            },
            template:assertOpened('template'),
            backdrop:assertOpened('backdrop'),
            scope:assertOpened('scope')
        },
        open: function (payload) {
            spy.opened.push(payload);
        }
    };
}