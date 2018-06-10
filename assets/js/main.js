jQuery(document).ready(function($) {

	// $(window).scroll(function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
	// 	var top = $(this).scrollTop();
	// 	if( top > 50){
	// 		$('.navbar-fixed-top').fadeOut(300);
	// 	}else{
	// 		$('.navbar-fixed-top').fadeIn(300);
	// 	}
	// });


	function triggerClick(elem) {
		$(elem).click();
	}
	var $progressWizard = $('.stepper'),
		$tab_active,
		$tab_prev,
		$tab_next,
		$btn_prev = $progressWizard.find('.prev-step'),
		$btn_next = $progressWizard.find('.next-step'),
		$tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
		$tooltips = $progressWizard.find('[data-toggle="tab"][title]');

        // To do:
        // Disable User select drop-down after first step.
        // Add support for payment type switching.

        //Initialize tooltips
        // $tooltips.tooltip();

        //Wizard
        $tab_toggle.on('show.bs.tab', function(e) {
        	var $target = $(e.target);

        	if (!$target.parent().hasClass('active, disabled')) {
        		$target.parent().prev().removeClass('disabled').addClass('completed');
        	}
        	if ($target.parent().hasClass('disabled')) {
        		$target.parent().removeClass('disabled').addClass('active');
        	}
        });

        // $tab_toggle.on('click', function(event) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     return false;
        // });

        $btn_next.on('click', function() {
        	$tab_active = $progressWizard.find('.active');

        	$tab_active.next().removeClass('disabled');

        	$tab_next = $tab_active.next().find('a[data-toggle="tab"]');
        	triggerClick($tab_next);

        });
        $btn_prev.click(function() {
        	$tab_active = $progressWizard.find('.active');
        	$tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
        	triggerClick($tab_prev);
        });

        $("#wins-slider").slider({
        	formatter: function(value) {
				return value + ' WINS';
			}
        });



});