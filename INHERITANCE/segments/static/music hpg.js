var audio = new Audio;
$(document).ready(function () {


    $(function () {
        $(".swiper-slide > #arjit").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#arjitpg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#arjitpg").html(data);
            }
        });
    });


    $(function () {
        $(".swiper-slide > #atif").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#atifpg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#atifpg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #MdRafi").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#MdRafipg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#MdRafipg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #lata").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#latapg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#latapg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #Asha").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#Ashapg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#Ashapg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #kishore").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#kishorepg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#kishorepg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #Marathi").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#Marathipg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#Marathipg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #Hindi").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#Hindipg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#Hindipg").html(data);
            }
        });
    });

    $(function () {
        $(".swiper-slide > #English").click(function (e) {
            //e.preventDefault(); 
            /*  
            if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
            if commented, html5 nonsupported browers will reload the page to the specified link. 
            */

            //get the link location that was clicked
            pageurl = $(this).attr("href");

            //to get the ajax content and display in div with id 'content'
            $.ajax({
                url: pageurl, success: function (data) {
                    $("#Englishpg").html(data);
                }
            });

            //to change the browser URL to 'pageurl'
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, "", pageurl);
            }
            return false;
        });
    });

    /* the below code is to override back button to get the ajax content without reload*/
    $(window).bind("popstate", function () {
        $.ajax({
            url: location.pathname, success: function (data) {
                $("#Englishpg").html(data);
            }
        });
    });


    let fetchButton = document.getElementById("")



});

console.log("hi");