import 'gsap';
import ScrollMagic from 'scrollmagic';
import Flickity from 'flickity';
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('gsap/src/minified/plugins/ScrollToPlugin.min');

let app = {
  init: function() {
    this.bindUIActions();
  },

  bindUIActions: function() {
    this.registerParallax();
    this.registerSlider();
    this.registerSmoothAnchor();
    this.registerNewsletter();
  },

  registerParallax: function() {
    var controller = new ScrollMagic.Controller();
    // build tween
    var tween = new TimelineMax ()
    .add([
      TweenMax.fromTo("#layer_1", 1, {top: 50}, {top: -400, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_2", 1, {top: 80}, {top: -500, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_3", 1, {top: 100}, {top: -600, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_4", 1, {top: 350}, {top: 100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_5", 1, {top: 400}, {top: 100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_6", 1, {top: 600}, {top: -100, ease: Linear.easeNone}),
      TweenMax.fromTo("#layer_7", 1, {top: 350}, {top: 100, ease: Linear.easeNone})
    ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".piri", duration: document.body.clientHeight})
    .setTween(tween)
    //  .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  },

  registerNewsletter: function() {
    var emailInput = document.getElementById("email");
    var emailButton = document.getElementById("email-btn");

    emailButton.addEventListener("click", function (e) {
      console.log("email listener");

      if(email.checkValidity() === true) {
        e.preventDefault();
        TweenMax.fromTo(emailInput, 0.5, {opacity: 1}, {opacity: 0, display:'none', ease: Linear.easeNone});
        TweenMax.fromTo(emailButton, 0.5, {opacity: 1}, {opacity: 0, display:'none', ease: Linear.easeNone});
        TweenMax.fromTo("#email-msg", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone});
      }
    });

  },

  registerSlider : function() {
    var elem = document.getElementById('slider');
    var flkty = new Flickity( elem, {
      // options,
      contain: true,
      freeScroll: true,
      autoPlay: true,
      prevNextButtons: false,
      pageDots: false
    });
  },

  registerSmoothAnchor : function() {
    var controller = new ScrollMagic.Controller();

    // change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (target) {
      TweenMax.to(window, 0.5, {
        scrollTo : {
          y : target - 200, // scroll position of the target along y axis
          autoKill : true // allows user to kill scroll action smoothly
        },
        ease : Cubic.easeInOut
      });
    });

    var linkMenu = document.getElementsByClassName("link-menu");

    var onClickLinkMenu = function(e) {
      e.preventDefault();
      console.log("onClickLinkMenu");
      var id = this.getAttribute("href");

      // trigger scroll
      controller.scrollTo(id);

      // if supported by the browser we can even update the URL.
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    };

    for (var i = 0; i < linkMenu.length; i++) {
      linkMenu[i].addEventListener('click', onClickLinkMenu, false);
    }

  }
};

app.init();
