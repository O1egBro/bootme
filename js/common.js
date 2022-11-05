var Common = {

	init: function() {

        Common.initJQueryEvents();
        Common.initTooltip();

		$(window).on('load', function() {
            Common.initFormStyler();
		}).on('resize', function() {

		});

	},
    initJQueryEvents: function() {

	    //fix scroll bug on tablet and mobile when open keyboard
        $('.field').on('focus', function() {
           $('body').addClass('openKeyboard');
        }).on('blur', function() {
            $('body').removeClass('openKeyboard');
        });

        $('.js-dd-sel').on('click', function(e) {
            e.preventDefault();
            Common.selectDropDown.apply(this);
        });

        $('.btn').on('click', function() {
            $(this).blur();
        });
       
    },

    selectDropDown: function() {
        var selected = $(this).text();
        $('.dd.open .ddTrigger__text').text(selected);

        $(this).closest('.dd').removeClass('open');
    },

    initFormStyler: function() {
        $('.formstyler').styler();
    },

    initTooltip: function() {
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    }



};

$(function() {
	Common.init();
});