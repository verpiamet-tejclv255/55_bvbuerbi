jQuery(document).ready(function () {

    jQuery('#menu-btn').click(function (e) {
        e.preventDefault();
        jQuery('.site-header').toggleClass('open');
        jQuery('body').toggleClass('noscroll');
    });

    var anchors = jQuery('.nav-primary').find('.genesis-nav-menu').find('a[href^="#"]');
    if (anchors.length) {
        anchors.click(function (e) {
            jQuery('.site-header.open').find('#menu-btn').click();
            e.preventDefault();
            var id = jQuery(this).attr('href');
            if (jQuery(id).length) {
                jQuery('html, body').animate({
                    scrollTop: jQuery(id).offset().top - 50
                }, 500);
            }
        });
    }

    jQuery('body:not(.woocommerce-page) table').each(function (i, e) {
        var headers = [];

        if (jQuery(this).find('tr:nth-child(1) th').length > 0) {
            jQuery(this).find('tr:nth-child(1) th').each(function () {
                var text = jQuery(this).text();
                if (jQuery(this).attr('colspan')) {
                    for (var j = 0; j < jQuery(this).attr('colspan'); j++) {
                        headers.push(text + ':');
                    }
                } else {
                    headers.push(text + ':');
                }
            });
        }
        if (headers.length > 0) {
            jQuery(this).find('tr').each(function (i, e) {
                var colCount = 0;
                jQuery(this).find('td').each(function (i) {
                    jQuery(this).attr('data-title', headers[colCount]);
                    if (jQuery(this).attr('colspan')) {
                        for (var j = 0; j < jQuery(this).attr('colspan'); j++) {
                            colCount++;
                        }
                    } else {
                        colCount++;
                    }
                });
            });
        }
    });

    jQuery(window).resize(function () {
        var h = jQuery('.site-header.fixed').outerHeight();
        if (h > 0) {
            jQuery('.site-inner.fixed').css('padding-top', h + 'px');
        }
    });

    jQuery(window).resize();
});

jQuery(window).scroll(function () {

    var scroll = jQuery(window).scrollTop();
    if (scroll > 0) {
        jQuery('.site-header').addClass('scroll');
    } else {
        jQuery('.site-header').removeClass('scroll');
    }

});