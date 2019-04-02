$(function ($) {

    $('.md-close').click( function() {
        $('.md-modal').removeClass('md-show');
        $("html").css({"overflow": "visible"});
        $("body").css({"overflow": "visible"});
        $('.sitenavigation').toggleClass('is-tapped');
        $('#hamburger').toggleClass('open');
    });

    $('.menu-icon').click(function() {
        $('.md-modal').addClass('md-show');
        // $('.md-content').empty();
        $('#modal_header').html('<a href="index.html"><h3>Topics</h3></a></br>' +
            '<a href="about.html"><h3>About Us</h3></a></br>' +
            '<a href="Contact.html"><h3>Contact Us</h3></a></br>' +
            '<a href="FAQ.html"><h3>FAQ</h3></a>');
        $('#dateTime').text('');
        $('#schedule').text('');
        $('#tv_show_name').text('');
    });

// on document ready
    $(document).ready(function() {

        // show/hide the mobile menu based on class added to container
        $('.menu-icon').click(function() {
            $(this).parent().toggleClass('is-tapped');
            $('#hamburger').toggleClass('open');
        });

        // handle touch device events on drop down, first tap adds class, second navigates
        $('.touch .sitenavigation li.nav-dropdown > a').on('touchend',
            function(e) {
                if ($('.menu-icon').is(':hidden')) {
                    var parent = $(this).parent();
                    $(this).find('.clicked').removeClass('clicked');
                    if (parent.hasClass('clicked')) {
                        window.location.href = $(this).attr('href');
                    } else {
                        $(this).addClass('linkclicked');

                        // close other open menus at this level
                        $(this).parent().parent().find('.clicked').removeClass('clicked');

                        parent.addClass('clicked');
                        e.preventDefault();
                    }
                }
            });
});

// When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

// Get the header
    var header = document.getElementById("myHeader");

// Get the offset position of the navbar
    var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $('#myHeader').css({'height':'70px','z-index':'1000'});
            $('#logo').css({'height':'100%','width':'auto'});
        } else {
            header.classList.remove("sticky");
            $('#myHeader').css({'height':'auto'});
            $('#logo').css({'height':'auto%','width':'10%'});
        }
    }

//    MAKE ACCORDION HERE

    let acc = document.getElementsByClassName("accordion");

    for ( let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }



} ( jQuery ));