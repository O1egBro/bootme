'use strict';

var Modal = {
    init: function init() {
        Modal.initJQueryEvents();
    },
    initJQueryEvents: function initJQueryEvents() {
        $('.modal-dialogAlignOut').on('click', function (e) {
            if (!$(e.target).hasClass('modal-dialogContent') && !$(e.target).closest('.modal-dialogContent').length) {
                $('.modal').modal('hide');
            }
        });
    }
};

$(function () {
    Modal.init();
});