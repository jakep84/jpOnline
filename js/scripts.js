// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUwcFwsHvkqb_BoynfCdVigm1m4dbbatA",
    authDomain: "project-167699048494230373.firebaseapp.com",
    databaseURL: "https://project-167699048494230373.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
//Add login/ logout
var jApp = {
    currentUser: {},
    username: '',
    isLoggedIn: function () {
        jApp.currentUser = auth.currentUser;
        if (jApp.currentUser !== null) {
            jApp.username = jApp.currentUser.displayName;
        }
        return jApp.currentUser !== null;
    },
    login: function () {
        if (!jApp.isLoggedIn()) {

            //---not allowing me to literaly sign in (even after I log out)
            auth.signInWithPopup(provider).then(function (result) {

                jApp.currentUser = result.user;
                jApp.username = jApp.currentUser.displayName;
                $('#loginInfo').html(jApp.username);
                $('#loggedIn').show();
                $('#btnLogin').hide();
   //             messageClass.getMessages();
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                $('#loginInfo').html(error.message);
            });
        }
    },
    logout: function () {
        auth.signOut().then(function () {
            jApp.currentUser = null;
            jApp.username = '';

            //worry with toggilng show and hide later
            //            $('#btnLogin').hide();
            //            $('#btnLogout').show();
        }).catch( function (error) {
            $('#loginInfo').html(error.message);
            // An error happened.
        })
    }
};





$(document).ready(function () {
    if (jApp.isLoggedIn()) {
        $('p').html(jApp, currentUser.google.displayName);
        //worry with toggilng show and hide later
//                $('#btnLogin').show();
//                $('#btnLogout').show();
        messageClass.getMessages();
        //    } else {
        //        $('#btnLogin').show();
        //        $('#btnLogout').show();
    }
    $('#btnLogin').on('click', jApp.login);
    $('#btnLogout').on('click', jApp.logout);
});


//FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
});
$(window).load(function() {
  $(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function() {
    var menu = $('nav ul');
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});


//OVERLAYS
$(document).ready(function() {
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  }
});


// SMOOTH NAV SCROLL 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


// WAYPOINTS
$(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

});